import prisma from "@/app/lib/prismadb";
import { auth } from "@/auth";
import { NextResponse } from "next/server";
export async function DELETE(request : Request){
try{
    const {id} = (await request.json()) as {
        id: string
    }
    if (id){
        await prisma.User.delete(
            {
                where:{
                    id: id
                }
            }
        )
        return NextResponse.json({
            message:"User sucessfully deleted"
        },
    {status: 202})
    }
    else{
        return NextResponse.json(
            {message: "Not Authenticated"},
            {status: 401}
        )
    }

}
catch(error){
    console.error("Internal Server Error:", error); // Log error
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
}
}

// export async function POST(){
//     try{
//         const session = await auth()

//         if (session){
            
//         }
//         else{
//             return NextResponse.json({
//                 message:"Not Authenticated"
//             },
//         {status: 400})
//         }
//     }
//     catch(error){
//         console.log("Internal Server Error")
//         return NextResponse.json({
//             message: "Internal Server Error"
//         },
//     {status: 500})
//     }
// }