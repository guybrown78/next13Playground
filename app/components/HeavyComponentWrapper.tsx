'use client'

import React, { useState } from 'react'
// import HeavyComponent from './HeavyComponent'
// import _ from 'lodash'
import dynamic from 'next/dynamic'


// const HeavyComponent = dynamic(
// 	() => import('./HeavyComponent'),
// 	{ 
// 		ssr: false,
// 		loading: () => <p>loading...</p> 
// 	}
// )

const HeavyComponentWrapper = () => {

	const [isVisible, setIsVisible] = useState(false)
	return (
		<div className='my-5'>
			<div className="flex space-x-3">
				<button 
					onClick={() => setIsVisible(true)}
					className="btn btn-primary btn-outline"
				>
					Show heavy component
				</button>

				<button 
					onClick={async () => {
						const _ = (await import('lodash')).default
						const users = [
							{ name: 'x' },
							{ name: 'b' },
							{ name: 'a' },
							{ name: 'c' },
						];
						const sorted = _.orderBy(users, ['name']);
						console.log(sorted);
					}}
					className="btn btn-primary btn-outline"
				>
					Show lodash
				</button>


			</div>
			
			{/* { isVisible && <HeavyComponent /> } */}
		</div>
	)
}

export default HeavyComponentWrapper