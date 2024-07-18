import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";
import { hash } from "bcryptjs";
import { SignUpFormDataType } from "@/app/lib/types";
import { User } from "@prisma/client";

export const POST = async (request: Request) => {
  try {
    const { username, email, password, password2 } =
      (await request.json()) as SignUpFormDataType;
    if (!email || !password || !username) {
      return NextResponse.json(
        { message: "All Fields Not Filled" },
        { status: 400 }
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const registered: User | null = (await prisma.user.findUnique({
      where: {
        email: email,
      },
    })) as User | null;

    if (registered) {
      return NextResponse.json(
        { message: "User Already Exists" },
        { status: 409 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password is Too Short" },
        { status: 400 }
      );
    }

    if (password !== password2) {
      return NextResponse.json(
        { message: "Passwords Dont Match" },
        { status: 400 }
      );
    }
    const pwHash = await hash(password, 12);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const user: User = (await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: pwHash,
      },
    })) as User;
    return NextResponse.json(
      { message: "User has been created" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
