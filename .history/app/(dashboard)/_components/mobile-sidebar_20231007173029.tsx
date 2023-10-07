import { Menu } from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'

export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger className="pr-4 md:hidden">
			<Menu />
			</SheetTrigger>
		</Sheet>
	)
}