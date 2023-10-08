import { db } from '@/lib/db'

const CourseIdPage = async ({
	params
}: {
	params: { courseId: string }
}) => {
	const course = await 
	return (
		<div>
			Course Id: {params.courseId}
		</div>
	);
}

export default CourseIdPage;