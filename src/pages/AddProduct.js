import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function AddProduct() {
  const [id , setId] = useState(0);
  const [title , setTitle] = useState("");
  const [desc , setDesc] = useState("");
  const [price , setPrice] = useState(0);
  
  let Navigate = useNavigate();

  function SendData(e){
    e.preventDefault();
    fetch("http://localhost:3000/products",{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({
        id,
        title,
        desc,
        price
      })
    })
    .then((res) => res.json())
    .then((data)=>{
      console.log(data)
      Navigate('/products')
    })
  }

  return (
    <>
      <form onSubmit={SendData}>

      <div class="mb-3">
        <label  class="form-label">ID</label>
        <input type="number" class="form-control"  placeholder="" onKeyUp={(e)=>setId(e.target.value)}/>
      </div>


        <div class="mb-3">
          <label  class="form-label">Title</label>
          <input type="text" class="form-control"  placeholder="" onKeyUp={(e)=>setTitle(e.target.value)}/>
        </div>

        <div class="mb-3">
          <label  class="form-label">Description</label>
          <input type="text" class="form-control"  placeholder="" onKeyUp={(e)=>setDesc(e.target.value)}/>
        </div>


        <div class="mb-3">
          <label  class="form-label">Price</label>
          <input type="number" class="form-control"  placeholder="" onKeyUp={(e)=>setPrice(e.target.value)}/>
        </div>

        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Add</button>
        </div>

       
      </form>
    </>
  )
}

export default AddProduct