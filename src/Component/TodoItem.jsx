import style from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate , handleDeleteItem }) {
  return (
    <>
      <div className={`${style["todoItemBox"]}`}>
        <div>{todoName}</div>
        <div>{todoDate}</div>
        <div>
          <button className={`${style["delete-btn"]} btn btn-danger`} onClick={()=>handleDeleteItem(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
