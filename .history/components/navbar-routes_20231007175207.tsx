'use client'

import { UserButton } from "@clerk/nextjs"
import { usePathname, useRouter } from "next/navigation";

export const NavbarRoutes = () => {
	const pathname = usePathname();
	const router = useRouter()
	return (
		<div className="flex ml-auto gap-x-2">
			<UserButton />
		</div>
	)
}

