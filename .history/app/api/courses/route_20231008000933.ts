import { NextResponse } from "next/server"

export async function POST(
	req: Request,
) {
	try {

	} catch (error) {
		console.log("[COURSES], error")
		retunr NextResponse("Internal Error", {status: 500 })
	}
}