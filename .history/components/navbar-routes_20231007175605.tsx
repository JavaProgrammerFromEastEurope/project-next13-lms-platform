'use client'

import { UserButton } from "@clerk/nextjs"
import { usePathname, useRouter } from "next/navigation";

export const NavbarRoutes = () => {
	const pathname = usePathname();
	const router = useRouter();

	const isTeacherPage = pathname?.startsWith("/teacher");
	const isPlayerPage = pathname?.includes("/chapter");
	return (
		<div className="flex ml-auto gap-x-2">
			{isTeacherPage || isPlayerPage ? (
				
			)}
			<UserButton />
		</div>
	)
}

