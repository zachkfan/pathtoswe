import prisma from "@/app/lib/prismadb";
import { InternshipsType } from "@/app/lib/types";
import { NextResponse } from "next/server";
import { UserInternshipRequest } from "@/app/lib/types";
import { JoinTable } from "@/app/lib/types";
import { auth } from "@/auth";



// MAKE SURE THAT IF USER SESSION THING HAPPENS THEN CHANGE TO SESSION PROVIDER

export async function POST(request : Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  try{  const session = await auth()

  const {tab} = await request.json() as {tab: string}
  if (tab == "Search"){
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

  if(session){
    // const user = (await prisma.user.findUnique({
    //   where: {
    //     email: session.user.email
    //   }
    // }))
    // const userId = (user?.id) as string
    const userId = session.user.id
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const editedInternships = (await prisma.join_table.findMany({
      where: {
        user_id: userId
      }
    })) as JoinTable[]
  const set = new Set(editedInternships.map((val: JoinTable) =>  val.internship_id))
    internships = internships.filter((arrVal : InternshipsType) => {
      return !set.has(arrVal.id)
    })
  }

  return NextResponse.json({ internships });

}
  else {
    // const internships = await prisma.join_table.findMany({
    //   where: {
    //     status: tab
    //   },
    //   select: {
    //     internships: true
    //     }
      
      
    // })
    if (session){
      // const user = (await prisma.user.findUnique({
      //   where: {
      //     email: session.user.email
      //   }
      // }))
      // const userId = (user?.id) as string
      const userId = session.user.id
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const internships = await prisma.internships.findMany({
      where: {
          join_table:{
            some: {
              user_id: userId,
              status: tab,
            }
          }
        
      }
    }) as InternshipsType[]

    return NextResponse.json({ internships });
  }  
    else{
      return new NextResponse("NOT LOGGED IN")
    }

  }
}catch{
  console.log("Broken shit")
  return new NextResponse("Error Somethign Unexpected Happene", {status: 500})

}
}

export async function PUT(request : Request){
  try{
    const session = await auth()
    if (!session){
      console.log("No account")
      return new NextResponse("No Account")
    }
    const {internshipId, status} = await request.json() as UserInternshipRequest;
    console.log({internshipId, status})
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

    const deleted = await prisma.join_table.delete({
      where:{
        status: status,
        user_id_internship_id: {
        user_id: userId,
        internship_id: internshipId,
        },
      }
    }) as JoinTable

    if (!deleted){
  
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await prisma.join_table.upsert({
      where: {      
        user_id_internship_id: {
        user_id: userId,
        internship_id: internshipId,
      },
      },
      update: {
        status: status
      },
      create:{
        user_id: userId,
        internship_id: internshipId,   
        status: status,
      }

    })
}

    return new NextResponse("Success", {status: 200})

  }catch{
    return new NextResponse("Error Somethign Unexpected Happene", {status: 500})
  }
}
