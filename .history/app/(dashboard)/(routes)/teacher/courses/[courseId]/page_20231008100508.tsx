import { db}
const CourseIdPage = async ({
	params
}: {
	params: { courseId: string }
}) => {
	return (
		<div>
			Course Id: {params.courseId}
		</div>
	);
}

export default CourseIdPage;