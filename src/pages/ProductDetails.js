import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [product , setProduct] =useState()
    let {productId} = useParams();
    useEffect(()=>{
      fetch(`http://localhost:3000/products/${productId}`)
      .then((res)=>res.json)
      .then((data)=>setProduct(data))
    },[])
  return (
    <div>
      {product?.id}
      {product?.title}
      {product?.rating}
    </div>
  )
}

export default ProductDetails