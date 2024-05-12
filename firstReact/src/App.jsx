import { useState } from "react";
import NewTodoForm from "./conponents/NewTodoForm";
import TodoItem from "./conponents/TodoItem";
import { HelloKingsley, HelloWorld } from "./conponents";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const copyTodos = [...todos];
    const ids = copyTodos.map((todo) => todo.id);
    let nextId = 1;
    if (ids.length > 0) {
      const maxId = Math.max(...ids);
      nextId = maxId + 1;
    }
    copyTodos.push({ ...todo, id: nextId });
    setTodos(copyTodos);
  };

  const updateTodo = (todo) => {
    const copyTodos = [...todos];
    const index = copyTodos.map((todo) => todo.id).indexOf(todo.id);
    copyTodos.splice(index, 1, todo);
    setTodos(copyTodos);
  };

  const deleteTodo = (todo) => {
    const copyTodos = [...todos];
    const index = copyTodos.map((todo) => todo.id).indexOf(todo.id);
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };

  return (
    <>
          <HelloWorld></HelloWorld>
          <HelloKingsley></HelloKingsley>
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo}></NewTodoForm>
      <h2>todo items</h2>
      <div className="row">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default App;
