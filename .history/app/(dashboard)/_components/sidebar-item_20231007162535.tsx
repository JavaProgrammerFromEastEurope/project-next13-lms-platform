'use-client'

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
	icon: LucideIcon;
	label: string;
	href: string;
}

export const SidebarItem = ({
	icon: Icon,
	label,
	href,
}: SidebarItemProps) => {
	const pathname = usePathname();
	const router = useRouter();


	const isActive =
		(pathname == "/" && href === "/") ||
		pathname === href ||
		pathname?.startsWith(`${href}/`)

	const onClick = () => {
		router.push(href);
	}


	return (
		<button
			onClick={onClick}
			type="button"
			className={cn(
				"flex itens-center gap-x-2 text-slate-500 text-sm
				"
			)}
		>
		</button>
	)
}
