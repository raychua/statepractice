import React, { useState } from "react";
import "../todoComponents/Todo1.css";
import { connect } from "react-redux";
import { add_task } from "../todoActions/todoAction";
import Todoitem from "./Todoitem";

function TodoList() {
  const [newName, setNewName] = useState("");

  const displayTodos = () => {
    return this.props.todoList.map((todo) => {
      return <Todoitem Todoitem={todo} />;
    });
  };

  return (
    <div className="todolist">
      <div>
        <span className="Label">Add task</span>
        <span className="newTaskInput">
          <input
            type="input"
            onChange={(event) => setNewName(event.target.value)}
          />
        </span>
        <span>
          <button
            onClick={() => {
              add_task({ name: newName, isDone: false });
              setNewName("");
            }}
          >
            Add Task
          </button>
        </span>
      </div>
      <div>{displayTodos()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todoList: state.todoList };
};

const mapDispatchToProps = (dispatch) => ({
  add_task: (todo) => dispatch(add_task(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
