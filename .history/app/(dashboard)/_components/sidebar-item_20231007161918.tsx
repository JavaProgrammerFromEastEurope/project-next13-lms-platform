'use-client'

import { LucideIcon } from 'lucide-react'
import {usePathname, useRouter} from 'next/navigation'

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
	return (
		<div>
			Sidebar Item
		</div>
	)
}