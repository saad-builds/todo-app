import { MdDelete } from "react-icons/md";
import './TodoItem.css'; // Optional for custom styles

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container my-2">
      <div className="row g-2 align-items-center">
        <div className="col-md-6">
          <span>{todoName}</span>
        </div>
        <div className="col-md-4">
          <span>{todoDate}</span>
        </div>
        <div className="col-md-2 text-center">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
