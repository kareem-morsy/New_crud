import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditProduct() {

    let {editproduct} = useParams()
    
    useEffect(()=>{
        fetch(`http://localhost:3000/edit/${editproduct}`,{
            method : 'PUT',

        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
    },[])
  return (
    <>
        <form >

            <div class="mb-3">
            <label  class="form-label">ID</label>
            <input type="number" class="form-control"  placeholder="" />
            </div>


            <div class="mb-3">
                <label  class="form-label">Title</label>
                <input type="text" class="form-control"  placeholder=""/>
            </div>

            <div class="mb-3">
                <label  class="form-label">Description</label>
                <input type="text" class="form-control"  placeholder=""/>
            </div>


            <div class="mb-3">
                <label  class="form-label">Price</label>
                <input type="number" class="form-control"  placeholder=""/>
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Edit</button>
            </div>

            
        </form>
    </>
  )
}

export default EditProduct