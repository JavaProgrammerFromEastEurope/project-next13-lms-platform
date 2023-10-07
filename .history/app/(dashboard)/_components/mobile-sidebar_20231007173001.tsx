import { Menu } from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'

export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger></SheetTrigger>
			<Menu />
		</Sheet>
	)
}