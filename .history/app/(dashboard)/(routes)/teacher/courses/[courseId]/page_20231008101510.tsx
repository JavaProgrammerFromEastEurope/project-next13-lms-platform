import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const CourseIdPage = async ({
	params
}: {
	params: { courseId: string }
}) => {
	const { userId } = auth();

	if (!userId) {
		return redirect('/')
	}

	const course = await db.course.findUnique({
		where: {
			id: params.courseId
		}
	})

	if (!course) {
		return redirect('/');
	}

	const requiredFields = [
		course.title,
		course.description,
		course.imageUrl,
		course.price,
		course.categoryId
	];

	const totalFields 		= requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;

	const completionText = `(${})`

	return (
		<div>
			Course Id: {params.courseId}
		</div>
	);
}

export default CourseIdPage;