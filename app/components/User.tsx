'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const User = () => {
	const {status, data: session } = useSession();

	return (
		<>
			{ status === 'loading' && 
				<li className="px-3 py-2"><span className="loading loading-dots loading-xs"></span></li>
			}
			{ status === 'authenticated' && 
				<li className="flex flex-row flex-nowrap justify-center">
					<span className='px-3 py-2'>{session.user!.name}</span>
					<Link href="/api/auth/signout">Sign out</Link>
				</li>
			}
			{ status === 'unauthenticated' && 
				<li><Link href="/api/auth/signin">Sign in</Link></li>
			}
		</>
	)
}

export default User