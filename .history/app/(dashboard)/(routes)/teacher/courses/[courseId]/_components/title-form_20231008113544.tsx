'use client'

import * as 

interface TitleFormProps {
	initialData: {
		title: string;
	};
	courseId: string;
};

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