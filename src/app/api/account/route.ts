import prisma from "@/app/lib/prismadb";
import { EditAccountDataType } from "@/app/lib/types";
import { NextResponse } from "next/server";
import {User} from "@prisma/client"
import bcrypt from "bcryptjs"
export async function DELETE(request : Request){
try{
    const {id} = (await request.json()) as {
        id: string
    }
    if (id){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
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

export async function POST(request : Request){
    try{
        const {id, username, email, old_password, password, password2} = (await request.json()) as EditAccountDataType
        console.log(username)
        if (id){
            if (old_password || password || password2){
                if (password != password2){
                    return NextResponse.json({
                        message: "Passwords Dont Match"
                    }, {status: 400})
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                const user = await prisma.user.findUnique({
                    where: {
                        id : id
                    }
                }) as User
                if (user.password){
                const passwordsMatch = await bcrypt.compare(old_password, user.password)
                if (!passwordsMatch){
                    return NextResponse.json({
                        message: "Incorrect Current Password"
                    }, {status: 400})
                }
            }
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            await prisma.user.update({
                where:{
                    id: id
                },
                data: {
                    name: username || undefined,
                    email: email || undefined,
                    password: password || undefined
                }
            })

            return NextResponse.json({
                message:"Successfully Edited"
            }, {status: 200})
        }
        else{
            return NextResponse.json({
                message:"Not Authenticated"
            },
        {status: 400})
        }
    }
    catch(error){
        console.log("Internal Server Error")
        return NextResponse.json({
            message: "Internal Server Error"
        },
    {status: 500})
    }
}