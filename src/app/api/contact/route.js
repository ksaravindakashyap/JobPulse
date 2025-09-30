import { NextResponse } from "next/server";
import contactEmail from "@/emails/contact-email";

export async function POST(request) {
	const body = await request.json();
	console.log(body);
	const { name, email, subject, message } = body;

	if (!name) {
		return NextResponse.json(
			{
				message: "Name is not defined!",
			},
			{ status: 422 }
		);
	}
	if (!email) {
		return NextResponse.json(
			{
				message: "email is not defined!",
			},
			{ status: 422 }
		);
	}
	if (!subject) {
		return NextResponse.json(
			{
				message: "subject is not defined!",
			},
			{ status: 422 }
		);
	}
	if (!message) {
		return NextResponse.json(
			{
				message: "message is not defined!",
			},
			{ status: 422 }
		);
	}

	contactEmail(name, email, subject, message);

	return NextResponse.json(
		{
			message: "Thanks for your email, we will contact you soon.",
		},
		{ status: 200 }
	);
}
