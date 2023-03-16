import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");

  const { todos, addTodo, deletedTodo, completedTodo } = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    <>
      <h3>Todo App</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "unset",
              }}
            >
              {todo.text}
            </span>
            {!todo.isCompleted ? (
              <button onClick={() => completedTodo(todo.id)}>✅</button>
            ) : null}
            <button onClick={() => deletedTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoList;
