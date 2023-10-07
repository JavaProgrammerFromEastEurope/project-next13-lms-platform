'use client'

import * as z from 'zod';
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	title: z.string().min(1, {
		message: "Title is required",
	})
})

const CreatePage = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: ""
		},
	});
	const { isSubmitting, isValid } = form.formState;
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	}
	return (
		<div className='flex h-full max-w-5xl p-6 mx-auto md:items-center md:justify-center'>
			<div>
				<h1 className='text-2xl'>
					Name your course
				</h1>
				<p className="text-sm text-slate-600">
					What would you like to name your course? Don&apos;t worry,
					you can change this later.
				</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="mt-8 space-y-8"
					>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem
							)}
						/>
					</form>
				</Form>
			</div>
		</div>
	)
}

export default CreatePage;