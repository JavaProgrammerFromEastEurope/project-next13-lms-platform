import { Menu } from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'

export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger className="pr-4 md:hidden hover:opacity-75">
			<Menu />
			</SheetTrigger>
		</Sheet>
	)
}