'use client'

import { UserButton } from "@clerk/nextjs"
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from "next/link";

export const NavbarRoutes = () => {
	const pathname = usePathname();
	const router = useRouter();

	const isTeacherPage = pathname?.startsWith("/teacher");
	const isPlayerPage = pathname?.includes("/chapter");

	return (
		<div className="flex ml-auto gap-x-2">
			{isTeacherPage || isPlayerPage ? (
				<Button>
					<LogOut className="w-4 h-4 mr-2"/>
					Exit
				</Button>
			): (
				<Link href='/teacher/courses'>
					<Button>
						Teacher Mode
					</Button>
				</Link>
			)}
			<UserButton />
		</div>
	)
}

