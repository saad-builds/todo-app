import { useState } from 'react';
import { BiMessageAdd } from 'react-icons/bi';
import './AddTodo.css'; // Optional for custom styles

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const nameChangeHandler = (event) => {
    setTodoName(event.target.value);
  };

  const dueDateChangeHandler = (event) => {
    setDueDate(event.target.value);
  };

  const addTodoButtonHandler = () => {
    if (todoName.trim() && dueDate) {
      onNewItem(todoName, dueDate);
      setTodoName("");
      setDueDate("");
    }
  };

  return (
    <div className="container my-3">
      <div className="row g-2 align-items-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Todo here..."
            value={todoName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={dueDateChangeHandler}
          />
        </div>
        <div className="col-md-2 text-center">
          <button
            type="button"
            className="btn btn-success my-button"
            onClick={addTodoButtonHandler}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
