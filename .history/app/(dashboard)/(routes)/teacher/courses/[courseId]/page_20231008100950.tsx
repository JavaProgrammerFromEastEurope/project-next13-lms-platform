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
		
	}
	return (
		<div>
			Course Id: {params.courseId}
		</div>
	);
}

export default CourseIdPage;