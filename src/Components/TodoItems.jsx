import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
