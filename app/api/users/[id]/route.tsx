import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client"

export async function GET(
	request: NextRequest, 
	{ params }: { params: { id: string } }
){
	// Fetch data from db
	const user = await prisma.user.findUnique({
		where:{id: parseInt(params.id)}
	})
	// If not found retutn 400 error
	if(!user){
		return NextResponse.json({
			error: 'User not found',
			status: 400
		})
	}
	// Else retutn data
	return NextResponse.json(user)
}


export async function PUT(
	request: NextRequest, 
	{ params }: { params: { id: string } }
){
	// VALIDATE the request body
	const body = await request.json()
	// If invalid, return 400
	const validation = schema.safeParse(body);
	if(!validation.success){
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		)
	}
	// Fetch the user with the given id
	// if doesn't exist, return 404
	const user = await prisma.user.findUnique({
		where: { id: parseInt(params.id) }
	})
	if(!user){
		return NextResponse.json({
			error: 'User not found',
			status: 404
		})
	}

	// const user = await prisma.user.findUnique({
	// 	where: { email: body.email }
	// })
	// if(user){
	// 	return NextResponse.json({ error: 'That email already exists'}, { status: 400 })
	// }

	// Update the user
	const updatedUser = await prisma.user.update({
		where: { id: parseInt(params.id) },
		data: {
			name: body.name,
			email: body.email
		}
	})
	// Return the updated user
	return NextResponse.json(updatedUser)
}


export async function DELETE(
	request: NextRequest, 
	{ params }: { params: { id: string } }
){
	// FETCH user from db
	// if doesn't exist, return 404
	const user = await prisma.user.findUnique({
		where: { id: parseInt(params.id) }
	});
	if(!user){
		return NextResponse.json({
			error: 'User not found',
			status: 404
		})
	}
	// Delete the user
	await prisma.user.delete({
		where: { id: user.id }
	})
	// return 200 status
	return NextResponse.json({});
}