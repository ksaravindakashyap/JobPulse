import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}

	try {
		const body = await request.json();
		const {
			name,
			designation,
			description,
			cv,
			expected_salary,
			video_intro,
			location,
			phone,
			website,
			twitter,
			facebook,
			linkedin,
			youtube,
		} = body;

		await prisma.user.update({
			where: { id: currentUser.id },
			data: {
				name,
				designation,
				description,
				cv,
				expected_salary: parseInt(expected_salary),
			},
		});

		if (currentUser.profile) {
			await prisma.profile.update({
				where: { userId: currentUser.id },
				data: {
					location,
					phone,
					website,
					twitter,
					facebook,
					linkedin,
					youtube,
				},
			});
		} else {
			await prisma.profile.create({
				data: {
					location,
					phone,
					website,
					twitter,
					facebook,
					linkedin,
					youtube,
					userId: currentUser.id,
				},
			});
		}
		return NextResponse.json(
			{
				message: "Thank you! Your profile has been updated.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
