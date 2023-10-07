'use client'

import { UserButton } from "@clerk/nextjs"

export const NavbarRoutes = () => {
	return (
		<div className="flex ml-auto ">
			<UserButton />
		</div>
	)
}

