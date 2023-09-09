import React, { useState, useEffect } from "react";
import "./daily.css";

import { GoChecklist } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";

const List = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("array")) || [];
    setArray(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(array));
  }, [array]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
if(input){
  setArray([...array, input]);

}
else{
  alert('Add your todos first!')
}
 
    setInput("");
  };

  const handleDelete = (index) => {
    const todos = array.filter((arr, ind) => ind !== index);
    setArray(todos);
  };

  return (
    <>
      <div className="cover">
        <div className="black-shadow-cover">
          <div className="todo-app">
            <h1 className="todo-header">
              Todo-App
              <GoChecklist
                style={{
                  color: "cadetblue",
                  marginLeft: "2%",
                  fontSize: "25px",
                }}
              />{" "}
            </h1>
            <h3
              style={{
                fontFamily: "great Vibes",
                color: "lightblue",
                textAlign: "center",
              }}
            >
              Mimi
            </h3>
            <div className="todo-form">
              <input  
                placeholder="Add your todos.."
                className="data-input"
                value={input}
                onChange={handleChange}
              />
              <button className="add-btn" onClick={handleClick}>
                Add
              </button>



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
  );
};

export default List;
