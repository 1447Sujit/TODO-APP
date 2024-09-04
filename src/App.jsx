
import "./App.css";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/TodoItems";
import { useState } from "react";

function App() {
  

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems)
  };


  const handleDeleteItem = (todoItemName)=>{
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
    // console.log(`item deleted ${todoItemName}`);
  }

  return (
    <div className="appContainer">
      <h1 className='appName' >TODO APP</h1>
      <div className="appItem">
        <AddTodo handleNewItem={handleNewItem}></AddTodo>
        {todoItems.length ===0 &&  <p className="welcome">Enjoy Your Day</p>}
        <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}></TodoItems>
      </div>
    </div>
  );
}

export default App;
