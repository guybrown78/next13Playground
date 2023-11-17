import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'


interface Props {
	searchParams: {
		sortOrder: string,
	}
}


const UsersPage = async ({ searchParams: { sortOrder }}:Props) => {

	
	return (
		<>
			<div className="flex justify-between items-center">
				<h1>Users</h1>
				<Link href="/users/new" className="btn btn-outline btn-accent">New User</Link>
			</div>
			<Suspense fallback={<p>Loading...</p>}>
				<UserTable sortOrder={sortOrder} />
			</Suspense>
			
		</>
	
	)
}

export default UsersPage