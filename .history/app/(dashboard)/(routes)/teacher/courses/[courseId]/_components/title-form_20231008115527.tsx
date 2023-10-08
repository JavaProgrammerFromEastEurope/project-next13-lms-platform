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
import { Pencil } from 'lucide-react';
import { useState } from 'react';

interface TitleFormProps {
	initialData: {
		title: string;
	};
	courseId: string;
};

const formSchema = z.object({
	title: z.string().min(1, {
		message: 'Title is required',
	})
})

export const TitleForm = ({
	initialData,
	courseId,
}: TitleFormProps) => {
	const [isEditing, setIsEdition] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData,
	});

	const { isSubmitting, isValid } = form.formState;
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values);
	}
	return (
		<div className='p-4 mt-6 border rounded-md bg-slate-100'>
			<div className="flex items-center justify-between font-medium">
				Course title
				<Button variant="ghost">
					{isEdition && (
						<>Cancel</>
					)}
					{!isEditing && (
						<>
							<Pencil className="w-4 h-4 mr-2"/>
							Edit title
						</>
					)}
				</Button>
			</div>
		</div>
	)
}