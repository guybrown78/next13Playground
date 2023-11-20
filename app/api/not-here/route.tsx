import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request:NextRequest){
	await resend.emails.send({
		from: 'noreply@digitalopolis.co.uk',
		to: 'guybrown78@gmail.com',
		subject: 'Hello...',
		react: <WelcomeTemplate name={"Guy"} />
	})

	return NextResponse.json({})
}