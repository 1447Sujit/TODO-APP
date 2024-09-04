import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems , handleDeleteItem }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} handleDeleteItem={handleDeleteItem}></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
