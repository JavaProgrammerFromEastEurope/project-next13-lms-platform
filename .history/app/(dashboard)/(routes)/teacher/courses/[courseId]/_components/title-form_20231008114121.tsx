'use client'

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import {Input} from "@/components/ui/input";
import { Button } from '@/components/ui/button';

interface TitleFormProps {
	initialData: {
		title: string;
	};
	courseId: string;
};

const formSchema = z.object({
	title: z.string().mi
})

export const TitleForm = ({
	initialData,
	courseId,
}: TitleFormProps) => {
	return (
		<div>
			Title Form
		</div>
	)
}