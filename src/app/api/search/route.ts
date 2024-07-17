import client from "@/app/lib/prismadb";
import { InternshipsType } from "@/app/lib/types";
import { NextResponse } from "next/server";



const prisma = client

export async function GET(){
    const internships = (await prisma.internships.findMany({})) as InternshipsType
    return NextResponse.json({internships})
}