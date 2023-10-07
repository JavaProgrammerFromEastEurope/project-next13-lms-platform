const DashboardLayout = ({
	children: children
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="h-full">
			<div className="hidden md">

			</div>
			{children}
		</div>
	);
}

export default DashboardLayout;