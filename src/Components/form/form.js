import React, { useState } from 'react'
import "./form.css"

export const Form = (props) => {
   const[name,setName]= useState("");// " " is initial value is passed
   const[price,setprice]= useState(0);
   const[Url,setUrl]= useState("");

const nameChangeHandelar=(e)=>{
    setName(e.target.value)

}

const priceChangeHandeler=(e)=>{
    setprice(e.target.value)
}

const urlChangehandeler=(e)=>{
    setUrl(e.target.value)
}

    const formEventHandeler=(event)=>{
    event.preventDefault();



    props.addProduct({name,price,imgUrl:Url})
    console.log(name);
    console.log(price);
    console.log(Url);
    }
  return (
    
    <form  onSubmit={formEventHandeler}>
        <h1>Add Product Component</h1>
        <div>
            <label htmlFor='name'>Product Name</label>
            <input onChange={nameChangeHandelar} type='text' id="product" placeholder='name'></input>
        </div>
        <div>
        <label htmlFor='price'>Price</label>
            <input onChange={priceChangeHandeler} type='number' id="price" placeholder='price'></input>
        </div>
        <div>
        <label htmlFor='image'>image URL</label>
            <input onChange={urlChangehandeler} type='text' id="image" placeholder='image'></input>
        </div>
        <button>Add Product</button>
    </form>
  )
}
export default Form;
