import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}

	try {
		const body = await request.json();

		const {
			name,
			description,
			location,
			revenue,
			phone,
			email,
			company_size,
			founded,
			logo_url,
			website,
			twitter,
			facebook,
			linkedin,
			youtube,
		} = body;

		console.log("#####=>", founded);

		let slug = slugify(name);
		const slugExist = await prisma.company.findFirst({
			where: {
				slug: slug,
			},
		});

		if (slugExist) {
			slug = `${slug}-${Math.floor(
				Math.random() * (999 - 100 + 1) + 100
			)}`;
		}

		Object.keys(body).forEach((value) => {
			if (!body[value]) {
				NextResponse.json(
					{
						message: "One or more fileds are empty!",
					},
					{ status: 404 }
				);
			}
		});

		let foundedDate;
		if (founded) {
			foundedDate = new Date(founded);
		}

		const company = await prisma.company.create({
			data: {
				name,
				slug,
				description,
				location,
				revenue,
				phone,
				email,
				company_size,
				founded: foundedDate.toISOString(),
				logo_url,
				website_url: website,
				twitter_url: twitter,
				facebook_url: facebook,
				linkedin_url: linkedin,
				youtube_url: youtube,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(
			{
				message: "Thank you! Your organization has been created.",
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
