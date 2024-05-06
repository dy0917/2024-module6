import { useState } from "react";

function UpdateTodoCard({todo, addTodo, onCancel}) {
  const [newTodo, setTodo] = useState({});

  const sumbit = (e) => {
    e.preventDefault();
    // setTodo({ title: undefined, completed: false });
    addTodo(todo);
  };

  const updateTodo = (newTodo) => {
    const updateTodo = { ...todo, ...newTodo };
    setTodo(updateTodo);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <form id="todo-form" onSubmit={sumbit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={todo.title}
                required
                onChange={(e) => updateTodo({ title: e.target.value })}
              />
              <label htmlFor="completed">Completed:</label>
              <input
                type="checkbox"
                id="completed"
                name="completed"
                defaultChecked={todo.completed}
                onChange={(e) => updateTodo({ completed: e.target.checked })}
              />
              <div className="row">
                <button className="btn btn-second" onClick={()=>onCancel(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateTodoCard;
