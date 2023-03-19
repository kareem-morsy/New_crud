import React from 'react'

function Products() {
  return (
    <>

   
      <div className='products-Container'>
        <h1 className='m-2'>Products Page</h1>
        <button className='btn btn-success m-3'>Add New Product</button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Titile 1</td>
              <td>1000</td>
              <td>
                <button className='btn btn-danger btn-sm m-1'>Delete</button>
                <button className='btn btn-info btn-sm m-1'>View</button>
                <button className='btn btn-primary btn-sm m-1'>Edit</button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>



    </>
  )
}

export default Products