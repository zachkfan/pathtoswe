import { NextResponse } from "next/server"
import prisma from "@/app/lib/prismadb";
import { hash } from "bcryptjs";

export const POST = async (request: Request) => {
    try {
        const {name, email, password, password2} = await request.json()
        if (!email || !password || !name){
            return new NextResponse("All Fields Not Filled", {
                status: 400,
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
                status: 400,
                statusText: "User Already Exists"
            })
        }

        if (password.length < 6){
            return new NextResponse("Password is Too Short" , {
                status: 400,
                statusText: "Password is Too Short"
            })
        }

        if (password !== password2){
            return new NextResponse("Passwords Dont Match" , {
                status: 400,
                statusText: "Passwords Dont Match"
            })
        }
        const pwHash = await hash(password, 12)
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: pwHash,
            }
            
        })
        return new NextResponse("User has been created", {
            status: 201,
        })
    } catch (error) {
        console.error("Error creating user:", error);
        return new NextResponse("Internal Server Error", {
            status: 500,
            statusText: "Internal Server Error"
        });
    }
}