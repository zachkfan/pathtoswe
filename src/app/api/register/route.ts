import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";
import { hash } from "bcryptjs";
import { SignUpFormData } from "@/app/lib/types";
import { User } from "@prisma/client";

export const POST = async (request: Request) => {
  try {
    const { username, email, password, password2 } =
      (await request.json()) as SignUpFormData;
    console.log(username, email, password, password2);
    if (!email || !password || !username) {
      return new NextResponse("All Fields Not Filled", {
        status: 400,
        statusText: "All Fields Not Filled",
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const registered: User | null = (await prisma.user.findUnique({
      where: {
        email: email,
      },
    })) as User | null;

    if (registered) {
      return new NextResponse("User Already Exists", {
        status: 400,
        statusText: "User Already Exists",
      });
    }

    if (password.length < 6) {
      return new NextResponse("Password is Too Short", {
        status: 400,
        statusText: "Password is Too Short",
      });
    }

    if (password !== password2) {
      return new NextResponse("Passwords Dont Match", {
        status: 400,
        statusText: "Passwords Dont Match",
      });
    }
    const pwHash = await hash(password, 12);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const user: User = (await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: pwHash,
      },
    })) as User;
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
