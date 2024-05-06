import { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState({});

  const sumbit = (e) => {
    e.preventDefault();
    setTodo({ title: undefined, completed: false });
    addTodo(todo)
  };

  const updateTodo = (newTodo) => {
    const updateTodo = { ...todo, ...newTodo };
    setTodo(updateTodo);
  };

  return (
    <>
    <h2>Todo form</h2>
      <div>
        <form id="todo-form" onSubmit={sumbit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={todo.title}
            required
            onChange={(e) => updateTodo({ title: e.target.value })}
          />
          <label htmlFor="completed">Completed:</label>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            onChange={(e) => updateTodo({ completed: e.target.checked })}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default NewTodoForm;
