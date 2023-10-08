import { NextResponse } from "next/server";

export default function PATCH(
	req: Request,
) {
	try {
		const { userId } = auth
	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Internal Error", {status: 500})
	}
};
