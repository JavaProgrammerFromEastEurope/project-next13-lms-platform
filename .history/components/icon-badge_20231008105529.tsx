import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils";

const backgroundVariants = cva (
	"rounded-full flex items-center justify-center",
	{
		variants: {
			variant: {
				default: 'bg-sky-100',
				
			}
		}
	}
)