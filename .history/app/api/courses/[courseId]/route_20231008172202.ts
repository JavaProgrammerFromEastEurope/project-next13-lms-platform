export default function PATCH(
	req: Request,
) {
	try {

	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Internal Error", {status: 500})
	}
};
