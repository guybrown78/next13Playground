import React from 'react'
import AddToCart from './AddToCart'
// import styles from './ProductCard.module.css'

const ProductCard = () => {
	return (
		<div className="flex flex-col space-x-8 items-center justify-center">
			Product Card
			<AddToCart  />
		</div>
	)
}

export default ProductCard