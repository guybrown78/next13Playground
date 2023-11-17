
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client"

export async function GET(nextRequest: NextRequest){
	const products = await prisma.product.findMany()
	return NextResponse.json(products);
}

export async function POST(request: NextRequest){
	const body = await request.json();
	const validation = schema.safeParse(body);
	// If invalid, return 400
	if(!validation.success){
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		)
	}
	// Else, return
	const newProduct = await prisma.product.create({
		data: {
			name: body.name,
			price: body.price
		}
	})
	return NextResponse.json(newProduct, { status: 201 })
}