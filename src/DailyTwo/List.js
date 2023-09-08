import React, { useState, useEffect } from 'react'
import './daily.css'
import {BsStars} from 'react-icons/bs'
import { RiDeleteBin6Line } from "react-icons/ri";

const List = () => {
 const [input, setInput]= useState("")
 const [array, setArray]= useState([])



 useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("array")) || [];
  setArray(savedTasks);
}, []);

useEffect(() => {
  localStorage.setItem("array", JSON.stringify(array));
}, [array]);


 const handleChange=(e)=>{
  setInput(e.target.value)
 }

const handleClick=()=>{
  setArray([...array, input])
  setInput("")
}

const handleDelete=(index)=>{
const todos=array.filter(( arr , ind)=>ind !== index);
setArray(todos)
  
}



 return(
<>

<div className="cover">
    <div className="black-shadow-cover">
    <div  className="todo-app">
  <h1  className="todo-header"><BsStars  style={{color:"lightblue"}}/>Todo-App <BsStars  style={{color:"lightblue"}}/>  </h1>
  <h3  style={{fontFamily:"great Vibes",color:"lightblue", textAlign:"center"}}>Mimi</h3>
  <div className="todo-form">
<input className='data-input'   value={input} onChange={handleChange} />
<button className='add-btn' onClick={handleClick}>add</button>




<div className="fulldata">
{array.map((item, index)=>(
  <div className="single-todo"  key={index}>
 
 
{/* text */}
 <div  className="todo-text">
  <p>{item}</p>
  </div>
{/* button */}
  <div className="todo-delete"> <button  className="delete" onClick={() => handleDelete(index)}>    <RiDeleteBin6Line   />   </button></div>
  
  </div>
))}
 </div>
   </div>   
    </div>
    </div>
      </div>

</>

 )

};

export default List