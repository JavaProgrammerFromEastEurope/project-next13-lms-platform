'use-client'

import { LucideIcon } from 'lucide-react'

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
	const pathname = usePathname = ();
	const router = us

	return (
		<div>
			Sidebar Item
		</div>
	)
}
