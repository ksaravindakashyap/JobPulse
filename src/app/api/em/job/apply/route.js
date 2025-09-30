import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function POST(request) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Unauthorized user.",
				},
				{ status: 401 }
			);
		}

		const body = await request.json();

		const { jobId, cover_letter, expected_salary } = body;

		const alreadyApplied = await prisma.application.findFirst({
			where: { jobId: parseInt(jobId), userId: currentUser.id },
		});

		if (alreadyApplied) {
			return NextResponse.json(
				{
					message: "Allready applied for this job.",
				},
				{ status: 401 }
			);
		}

		await prisma.application.create({
			data: {
				cover_letter,
				expected_salary,
				jobId: parseInt(jobId),
				userId: currentUser.id,
			},
		});

		return NextResponse.json(
			{
				message: "Thank you!  You will get notified soon.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
