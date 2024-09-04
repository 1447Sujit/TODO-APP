import { useState } from "react";
import style from "./AddTodo.module.css";

function AddTodo({ handleNewItem}) {

  const [todoName, setTodoName]= useState()
  const [dueDate, setdueDate]= useState()

  const handleNameChange =(e)=>{
   setTodoName(e.target.value);
  }

  const handleDateChange = (e)=>{
    setdueDate(e.target.value);
  }

  const handleAddButtonClicked = ()=>{
    handleNewItem(todoName,dueDate);
    setdueDate("");
    setTodoName("");
  }

  return (
    <div className={style.box}>

      <div>
        <input
          type="text"
          placeholder="Enter Todo Here"
          className={style["input-todo"]}
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <input type="date" className={style["input-date"]}
        value={dueDate}
        onChange={handleDateChange}
        />
      </div>

      <div>
        <button className={`${style["add-btn"]} btn btn-success`}
        onClick={handleAddButtonClicked}>Add</button>
      </div>
      
    </div>
  );
}

export default AddTodo;
