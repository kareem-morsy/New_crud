import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <ul>
            <li>
                <Link to='/products'>Get all Products</Link>
            </li>

            <li>
                <a href='#'>Get all Categories</a>
            </li> 

        </ul>
    </>
  )
}

export default Sidebar