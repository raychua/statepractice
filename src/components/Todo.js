import React from "react";
import "./Todo.css";

// destructure the new property "setTodo"
export default ({ name, isDone, setTodo, deleteTodo }) => (
  <div className="todo">
    <span className="todo__completed" onClick={() => setTodo(!isDone)}>
      {isDone && <img alt="done" src={`${process.env.PUBLIC_URL}/tick.png`} />}
    </span>
    <span className="todo__name">{name}</span>

    <span onClick={() => deleteTodo()} className="todo__delete">
      X
    </span>
  </div>
);
