import prisma from "@/app/lib/prismadb";
import { InternshipsType } from "@/app/lib/types";
import { NextResponse } from "next/server";

export async function GET() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const internships = (await prisma.internships.findMany({
    where: {
      open_for_application: true,
    },
  })) as InternshipsType;
  return NextResponse.json({ internships });
}
