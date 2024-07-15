import { NextResponse } from "next/server"
import client from "@/app/libs/prismadb";
import { hash } from "bcryptjs";
import { data } from "@/app/ui/dashboard/data";




export const POST = async (request: Request) => {
    const {name, email, password, password2} = await request.json()
    const prisma = client;
    if (!email || !password || !name){
        return new NextResponse("All Fields Not Filled", {
            status:500,
            statusText: "All Fields Not Filled"
        })
        }

    const registered = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(registered){
        return new NextResponse("User Already Exists", {
            status:500,
            statusText: "User Already Exists"
        })
    }

    if (password.length < 6){
        return new NextResponse("Password is Too Short" , {
            status:500,
            statusText: "Password is Too Short"
        })
    }

    if (password != password2){
        return new NextResponse("Passwords Dont Match" , {
            status:500,
            statusText: "Passwords Dont Match"
        })
    }
    const pwHash = await hash(password,12)
    const user = prisma.user.create({
        data: {
            name: name,
            email: email,
            password: pwHash,
        }
        
    })

    return new NextResponse("User has been created", {
        status: 201,
    })
}