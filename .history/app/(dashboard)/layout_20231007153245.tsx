const DashboardLayout = ({
	children: children
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="h-full">
			<div className="hidden md:flex h-full w-56 flex-col fixed ">

			</div>
			{children}
		</div>
	);
}

export default DashboardLayout;