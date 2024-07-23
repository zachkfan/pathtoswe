import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import {
  JoinTableType,
  InternshipsType,
  UserInternshipRequestType,
} from "@/app/lib/types";
import { auth } from "@/auth";

// MAKE SURE THAT IF USER SESSION THING HAPPENS THEN CHANGE TO SESSION PROVIDER

export async function POST(request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  try {
    const session = await auth();

    const { tab } = (await request.json()) as { tab: string };
    if (tab == "Search") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      let internships = (await prisma.internships.findMany({
        where: {
          open_for_application: true,
          created_by: null,
        },
        orderBy: {
          date_posted: "desc",
        },
      })) as InternshipsType[];

      if (session) {
        // const user = (await prisma.user.findUnique({
        //   where: {
        //     email: session.user.email
        //   }
        // }))
        // const userId = (user?.id) as string
        const userId = session.user.id;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const editedInternships = (await prisma.join_table.findMany({
          where: {
            user_id: userId,
          },
        })) as JoinTableType[];
        const set = new Set(
          editedInternships.map((val: JoinTableType) => val.internship_id)
        );
        internships = internships.filter((arrVal: InternshipsType) => {
          return !set.has(arrVal.id);
        });
      }

      return NextResponse.json({ internships }, { status: 200 });
    } else {
      // const internships = await prisma.join_table.findMany({
      //   where: {
      //     status: tab
      //   },
      //   select: {
      //     internships: true
      //     }

      // })
      if (session) {
        // const user = (await prisma.user.findUnique({
        //   where: {
        //     email: session.user.email
        //   }
        // }))
        // const userId = (user?.id) as string
        const userId = session.user.id;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const internships = (await prisma.internships.findMany({
          where: {
            join_table: {
              some: {
                user_id: userId,
                status: tab,
              },
            },
          },
        })) as InternshipsType[];

        return NextResponse.json({ internships }, { status: 200 });
      } else {
        return NextResponse.json({ message: "No Account" }, { status: 400 });
      }
    }
  } catch {
    console.log("Broken shit");
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await auth();
    if (!session) {
      console.log("No account");
      return NextResponse.json({ message: "No Account" }, { status: 400 });
    }
    const { internshipId, status } =
      (await request.json()) as UserInternshipRequestType;
    console.log({ internshipId, status });
    const userId = session.user.id;
    // console.log(session.user.id)
    // console.log(userId);
    //Maybe cahnge to take from user session instead of this?
    // const user = (await prisma.user.findUnique({
    //   where: {
    //     email: session.user.email
    //   }
    // }))
    // const userId = (user?.id) as string

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const exists = (await prisma.join_table.findUnique({
      where: {
        status: status,
        user_id_internship_id: {
          user_id: userId,
          internship_id: internshipId,
        },
      },
    })) as JoinTableType | null;

    if (exists == null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await prisma.join_table.upsert({
        where: {
          user_id_internship_id: {
            user_id: userId,
            internship_id: internshipId,
          },
        },
        update: {
          status: status,
        },
        create: {
          user_id: userId,
          internship_id: internshipId,
          status: status,
        },
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      (await prisma.join_table.delete({
        where: {
          status: status,
          user_id_internship_id: {
            user_id: userId,
            internship_id: internshipId,
          },
        },
      })) as JoinTableType;
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
