import { NextResponse } from "next/server"

export async function POST(
	req: Request,
) {
	try {

	} catch (error) {
		console.log("[COURSES], error")
		return NextResponse("Internal Error", {status: 500 })
	}
}