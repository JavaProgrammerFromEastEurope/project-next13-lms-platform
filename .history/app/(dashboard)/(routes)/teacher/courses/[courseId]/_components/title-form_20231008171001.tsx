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
	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing((current) => !current);

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
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing ? (
						<>Cancel</>
					) : (
						<>
							<Pencil className="w-4 h-4 mr-2"/>
							Edit title
						</>
					)}
				</Button>
			</div>
			{!isEditing && (
				<p className="mt-2 text-sm">
					{initialData.title}
				</p>
			)}
			{isEditing && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="mt-4 space-y-4"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											disabled={isSubmitting}
											placeholder="e.g. 'Advanced web development'"
											{...field }
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2">
							<Button
								disabled={!isValid || isSubmitting}
								type=""
							>
								Save
							</Button>
						</div>
					</form>
				</Form>
			)}
		</div>
	)
}