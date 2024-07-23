import prisma from "@/app/lib/prismadb";
import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { JoinTableType, InternshipsType } from "@/app/lib/types";

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
        select: {
          internships: true, // Include the related internship details
          status: true,
          date_applied: true,
        },
        orderBy: {
          date_applied: "desc",
        },
      })) as (JoinTableType & { internships: InternshipsType })[];

      //   console.log(`Join Table Entries: ${JSON.stringify(joinTableEntries)}`); // Log join table entries

      if (!joinTableEntries.length) {
        console.log("No entries found.");
        return NextResponse.json(
          { message: "No data found", internships: [] },
          { status: 200 }
        );
      }

      // Map join table entries to include internship details
      const result = joinTableEntries.map((entry) => ({
        ...entry.internships,
        status: entry.status,
        date_applied: entry.date_applied,
      }));

      return NextResponse.json({ result }, { status: 200 });
    } else {
      return NextResponse.json({ message: "No Account" }, { status: 400 });
    }
  } catch (error) {
    console.error("Internal Server Error:", error); // Log error
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
