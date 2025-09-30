import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { slugify } from "@/utils/slugify";
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

		const {
			company,
			category,
			title,
			image,
			description,
			job_type,
			location,
			salary_range,
			position,
			experience,
			office_days,
			holidays,
			office_start_time,
			office_end_time,
			tags,
		} = body;

		// Create array from tags string CSV
		const tagsArray = tags
			.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
			.map((item) =>
				item
					.trim()
					.replace(/(^"|"$)/g, "")
					.toLowerCase()
					.replace(/\s+/g, "-")
			);

		let slug = slugify(title);
		const slugExist = await prisma.job.findFirst({
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

		const createTags = await Promise.all(
			tagsArray.map(async (tagName) => {
				// Check if the tag already exists
				const existingTag = await prisma.tag.findFirst({
					where: {
						name: tagName,
					},
				});

				if (existingTag) {
					// Use the existing tag's ID
					return { tagId: existingTag.id };
				} else {
					// Create tag
					const newTag = await prisma.tag.create({
						data: {
							name: tagName,
						},
					});
					return { tagId: newTag.id };
				}
			})
		);

		await prisma.job.create({
			data: {
				companyId: company.id,
				categoryId: category.id,
				userId: currentUser.id,
				title,
				slug,
				image,
				description,
				job_type: job_type.value,
				location,
				salary_range,
				position,
				experience,
				office_days,
				holidays,
				office_start_time,
				office_end_time,
				status: "RUNNING",
				tags: {
					create: createTags,
				},
			},
		});

		return NextResponse.json(
			{
				message: "Job submitted you will get reply soon.",
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

export async function PUT(request) {
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

		const {
			jobId,
			category,
			title,
			image,
			description,
			job_type,
			location,
			salary_range,
			position,
			experience,
			office_days,
			holidays,
			office_start_time,
			office_end_time,
			tags,
		} = body;

		// Create array from tags string CSV
		const tagsArray = tags
			.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
			.map((item) =>
				item
					.trim()
					.replace(/(^"|"$)/g, "")
					.toLowerCase()
					.replace(/\s+/g, "-")
			);

		let slug = slugify(title);
		const slugExist = await prisma.job.findFirst({
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

		const createTags = await Promise.all(
			tagsArray.map(async (tagName) => {
				// Check if the tag already exists
				const existingTag = await prisma.tag.findFirst({
					where: {
						name: tagName,
					},
				});

				if (existingTag) {
					// Use the existing tag's ID
					return { tagId: existingTag.id };
				} else {
					// Create tag
					const newTag = await prisma.tag.create({
						data: {
							name: tagName,
						},
					});
					return { tagId: newTag.id };
				}
			})
		);

		const existingTags = await prisma.job
			.findUnique({
				where: { id: Number(jobId) },
				include: { tags: { select: { id: true } } },
			})
			.then((item) => item?.tags || []);

		// Disconnect existing tags
		await prisma.job.update({
			where: { id: Number(jobId) },
			data: {
				tags: {
					disconnect: existingTags.map((tag) => ({ id: tag.id })),
				},
			},
		});

		await prisma.job.update({
			where: { id: jobId },
			data: {
				categoryId: category.id,
				title,
				slug,
				image,
				description,
				job_type: job_type.value,
				location,
				salary_range,
				position,
				experience,
				office_days,
				holidays,
				office_start_time,
				office_end_time,
				tags: {
					create: createTags,
				},
			},
		});

		return NextResponse.json(
			{
				message: "Job hase been updated.",
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
