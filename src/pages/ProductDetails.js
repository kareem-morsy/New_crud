import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    let {productId} = useParams();
    console.log(productId)
  return (
    <div>ProductDetails {productId}</div>
  )
}

export default ProductDetails