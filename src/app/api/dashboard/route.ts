import prisma from "@/app/lib/prismadb";
import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { JoinTableType } from "@/app/lib/types";

export async function POST() {
  try {
    const session = await auth();
    if (session) {
      const userId = session.user.id;

      // Inner query to get the internship_ids, status, date_applied, and include internship details
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const joinTableEntries = (await prisma.join_table.findMany({
        where: {
          user_id: userId,
          status: {
            in: ["Pending", "Hired", "Closed", "Interviewed"],
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
