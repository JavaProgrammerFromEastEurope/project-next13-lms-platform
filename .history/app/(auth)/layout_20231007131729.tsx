import React from 'react'

const AuthLayout = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
		<div className='h-full flex item-center'>
			{children}
		</div>
	)
}

export default AuthLayout