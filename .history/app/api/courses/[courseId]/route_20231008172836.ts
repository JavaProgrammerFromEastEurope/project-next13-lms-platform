import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
imort 
export default function PATCH(
	req: Request,
	{ params }: { params: { courseId: string }}
) {
	try {
		const { userId } = auth();
		const { courseId } = params;
		const values = await req.json();

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 })
		}

		const course = await db.

	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Internal Error", {status: 500})
	}
};
