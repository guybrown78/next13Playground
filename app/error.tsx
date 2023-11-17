'use client'

import React from 'react'


interface Props {
	error: Error;
	reset:() => void;
}
const ErrorPage = ({ error, reset }:Props) => {
	// console.log('Error', error)
	// log into third party logging system such as sentry

	return (
		<>
			<div>An unexpected error had occured.</div>
			<button 
				className='btn btn-primary'
				onClick={() => reset()}
			>
				Retry
			</button>
		</>
	)
}

export default ErrorPage