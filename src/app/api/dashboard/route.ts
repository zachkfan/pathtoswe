import prisma from "@/app/lib/prismadb";
import { auth } from "@/auth";
import { NextResponse } from "next/server";
import {
  JoinTableType,
  ApplicationCountsType,
  StatusCountType,
  UpsertApplicationRequest,
  InternshipsType,
} from "@/app/lib/types";

export async function GET() {
  try {
    const session = await auth();
    if (session) {
      const userId = session.user.id;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const counts = (await prisma.join_table.groupBy({
        by: ["status"],
        where: {
          user_id: userId,
        },
        _count: {
          status: true,
        },
      })) as StatusCountType[];

      const countsMap: ApplicationCountsType = {
        All: 0,
        Pending: 0,
        Closed: 0,
        Interviewed: 0,
        Hired: 0,
      };

      counts.forEach((count) => {
        if (Object.prototype.hasOwnProperty.call(countsMap, count.status)) {
          countsMap[count.status] = count._count.status;
        }
      });

      countsMap.All =
        countsMap.Pending +
        countsMap.Closed +
        countsMap.Interviewed +
        countsMap.Hired;

      return NextResponse.json(countsMap, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Internal Server Error:", error); // Log error
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const session = await auth();
    if (session) {
      const { tab } = (await request.json()) as {
        tab: "All" | "Pending" | "Closed" | "Hired" | "Interviewed";
      };

      const userId = session.user.id;

      let statusArray: string[];

      if (tab === "All") {
        statusArray = ["Pending", "Hired", "Closed", "Interviewed"];
      } else {
        statusArray = [tab];
      }

      // Inner query to get the internship_ids, status, date_applied, and include internship details
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const joinTableEntries = (await prisma.join_table.findMany({
        where: {
          user_id: userId,
          status: {
            in: statusArray,
          },
        },
        include: {
          internships: true, // Include related internship details
        },
        orderBy: {
          date_applied: "desc",
        },
      })) as JoinTableType[];

      //   console.log(`Join Table Entries: ${JSON.stringify(joinTableEntries)}`); // Log join table entries

      if (joinTableEntries.length === 0) {
        console.log("No entries found.");
        return NextResponse.json(
          { message: "No data found", data: [] },
          { status: 200 }
        );
      }

      return NextResponse.json(joinTableEntries, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Internal Server Error:", error); // Log error
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await auth();
    if (session) {
      const userId = session.user.id;
      const {
        company,
        role,
        location,
        datePosted,
        dateApplied,
        applicationDashboard,
        status,
        addOrEdit,
        internship_id,
      } = (await request.json()) as UpsertApplicationRequest;
      console.log(
        company,
        role,
        location,
        datePosted,
        dateApplied,
        applicationDashboard,
        status
      );
      if (addOrEdit == "Edit") {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        await prisma.join_table.update({
          where: {
            user_id_internship_id: {
              user_id: userId,
              internship_id: internship_id,
            },
          },
          data: {
            dateApplied: dateApplied || undefined,
            application_dashboard: applicationDashboard || undefined,
            status: status,
          },
        });
      }
      //addorEdit == Add
      else {
        if (!company || !role) {
          return NextResponse.json(
            { message: "Company or Role Field Not Filled" },
            { status: 400 }
          );
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const newInternship = (await prisma.internships.create({
          data: {
            company: company,
            role: role,
            location: location || null,
            date_posted: datePosted ? new Date(datePosted).toISOString() : null,
            created_by: userId,
            open_for_application: true,
          },
        })) as InternshipsType;

        console.log("Internship Successfully Created");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        await prisma.join_table.create({
          data: {
            users: { connect: { id: userId } },
            internships: { connect: { id: newInternship.id } },
            // user_id_internship_id: {
            //   user_id: userId,
            //   internship_id: internship_id,
            // },
            status: status,
            date_applied: dateApplied
              ? new Date(dateApplied).toISOString()
              : new Date().toISOString().split("T")[0] + "T00:00:00.000Z",
            application_dashboard: applicationDashboard || null,
          },
        });
        console.log("Join Table successfully created");
      }
    } else {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Changes Successfully Saved" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal Server Error:", error); // Log error
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await auth();
    if (session) {
      const userId = session.user.id;
      const { id } = (await request.json()) as { id: string };
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const toBeDeleted = (await prisma.internships.findUnique({
        where: {
          id: id,
        },
      })) as InternshipsType;

      if (toBeDeleted.created_by) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        await prisma.internships.delete({
          where: {
            id: id,
            created_by: userId,
          },
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        await prisma.join_table.delete({
          where: {
            user_id_internship_id: {
              user_id: userId,
              internship_id: id,
            },
          },
        });
      }
    } else {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { message: "Successfully Deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal Server Error:", error); // Log error
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
