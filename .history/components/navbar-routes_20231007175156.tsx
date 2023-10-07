'use client'

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation";

export const NavbarRoutes = () => {
	const pathname = usePathname();
	const router = 
	return (
		<div className="flex ml-auto gap-x-2">
			<UserButton />
		</div>
	)
}

