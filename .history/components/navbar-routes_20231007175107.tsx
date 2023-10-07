'use client'

import { UserButton } from "@clerk/nextjs"

export const NavbarRoutes = () => {
	const pathname = 
	return (
		<div className="flex ml-auto gap-x-2">
			<UserButton />
		</div>
	)
}

