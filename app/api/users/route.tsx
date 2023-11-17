import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client"

export async function GET(request: NextRequest){
	const users = await prisma.user.findMany()
	return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	// Validate
	const validation = schema.safeParse(body);
	// If invalid, return 400
	if(!validation.success){
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		)
	}
	const user = await prisma.user.findUnique({
		where: { email: body.email }
	})
	if(user){
		return NextResponse.json({ error: 'That email already exists'}, { status: 400 })
	}
		
	// Else, create user and return
	const newUser = await prisma.user.create({
		data: {
			name: body.name,
			email: body.email
		}
	})
	return NextResponse.json(newUser, { status: 201 })
}