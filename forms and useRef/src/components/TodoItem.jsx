import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row meri-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger meri-button"
            onClick={() => deleteItem(todoName)}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
