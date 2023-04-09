import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'

function Products() {
  const products = UseFetch("http://localhost:3000/products")
  console.log(products)
  
  return (
    <>

   
      <div className='products-Container'>
        <h1 className='m-2'>Products Page</h1>
        <Link to='add' className='btn btn-success m-3'>Add New Product</Link>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product,index)=>{
              return(
                <tr key={index}>
                  <th scope="row">{product.id}</th>
                  <td>{product.title}</td>
                  <td>{product.description.slice(0,50)}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className='btn btn-danger btn-sm m-1'>Delete</button>
                    <Link to={`/products/${product.id}`} className='btn btn-info btn-sm m-1'>View</Link>
                    <button className='btn btn-primary btn-sm m-1'>Edit</button>
                  </td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
      </div>



    </>
  )
}

export default Products