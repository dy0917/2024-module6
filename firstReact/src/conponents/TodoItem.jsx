import { useState } from "react";
import UpdateTodoCard from "./UpdateTodoCard";
export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEdit, setEditState] = useState(false);
  const onCompletedChange = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(updatedTodo);
  };

  const onDeleteClick = (todo) => {
    deleteTodo(todo);
  };

  const setEditView = (bool = true) => {
    setEditState(bool);
  };
  return (
    <div className="col-12 col-sm-6 col-md-3">
      {isEdit ? (
        <UpdateTodoCard todo={todo} onCancel={setEditView}></UpdateTodoCard>
      ) : (
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <input
                type="checkbox"
                id="completed"
                name="completed"
                defaultChecked={todo.completed}
                onChange={() => onCompletedChange(todo)}
              />
              <h5
                className={`title ${
                  todo.completed ? "text-decoration-line-through" : ""
                }`}
              >
                {todo.title}
              </h5>
            </div>
            <a
              href="#"
              className="btn btn-danger delete"
              onClick={() => onDeleteClick(todo)}
            >
              Delete
            </a>
            <a href="#" className="btn btn-primary edit" onClick={setEditView}>
              Edit
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
