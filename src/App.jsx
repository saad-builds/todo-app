import React from "react";
import { useState } from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const initialTodoItems = [
    {
      name: "Go to Gym",
      dueDate: "10/10/2025",
    },
    {
      name: "Play Football",
      dueDate: "10/10/2025",
    }
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
  const isDuplicate = todoItems.some((item) => item.name.toLowerCase().trim() === itemName.toLowerCase().trim());

  if (isDuplicate) {
    alert("Todo with this name already exists!");
    return;
  }

  const newTodoItems = [
    ...todoItems,
    {
      name: itemName.trim(),
      dueDate: itemDueDate,
    },
  ];

  setTodoItems(newTodoItems);
};


  const deleteItemHandler = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={deleteItemHandler}
      ></TodoItems>
    </center>
  );
}

export default App;
