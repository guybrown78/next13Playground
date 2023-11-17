import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client"

export async function GET(
	request: NextRequest, 
	{ params }: { params: { id: string } }
){
	// Fetch data from db
	const product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) }
	})
	// If not found retutn 400 error
	if(!product){
		return NextResponse.json({
			error: 'Product not found',
			status: 400
		})
	}
	// Else retutn data
	return NextResponse.json(product)
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
	const product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) }
	})
	if(!product){
		return NextResponse.json({
			error: 'Product not found',
			status: 400
		})
	}
	// Update the Product
	const updatedProduct = await prisma.product.update({
		where: { id: parseInt(params.id) },
		data: {
			name: body.name,
			price: body.price
		}
	})
	// Return the updated product
	return NextResponse.json(updatedProduct)
}

export async function DELETE(
	request: NextRequest, 
	{ params }: { params: { id: string } }
){
	const product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) }
	})
	if(!product){
		return NextResponse.json({
			error: 'Product not found',
			status: 400
		})
	}
	// Delete the product
	await prisma.product.delete({
		where: { id: product.id }
	})
	// return 200 status
	return NextResponse.json({});
}