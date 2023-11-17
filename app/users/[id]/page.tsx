import Link from 'next/link'
import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
	params: { id: number }
}

const UserDetailPage = ({params: { id } }:Props) => {
	if (id > 10) notFound();
	return (
		<>
			<div>UserDetailPage {id}</div>
			<Link 
				href={`./${id}/photos/${Math.ceil(Math.random()*10)}`} 
				className="btn btn-primary"
			>
				photo
			</Link>
		</>
	
	)
}

export default UserDetailPage