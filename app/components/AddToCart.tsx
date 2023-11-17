'use client'

import Link from 'next/link'
import React from 'react'

const AddToCart = () => {
	return (
		// <button className="btn btn-primary" onClick={() => console.log('Click')}>Add to cart</button>
		<Link href="/users" className='btn btn-primary'>Add to Cart</Link>
	)
}

export default AddToCart