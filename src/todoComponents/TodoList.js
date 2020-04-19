import React, { useState } from "react";
import "../todoComponents/Todo1.css";
import { connect } from "react-redux";
import { add_task } from "../todoActions/todoAction";
import Todoitem from "./Todoitem";

function TodoList({ todoList, addTask }) {
  //props retrieved from the state have to passed in (destructured) and sequence to match the mapStateToProps below?
  //Accessing this.props is only possible for Class Component, and so there is no need anymore since we implement redux. right?
  const [newTask, setNewTask] = useState("");

  const displayTodos = () => {
    console.log("num of items:" + todoList.length);
    const list = todoList.map((todo) => {
      return <Todoitem todoItem={todo} />;
    });
    return list;
  };

  return (
    <div className="todolist">
      <div>
        <span className="Label">Add task</span>
        <span className="newTaskInput">
          <input
            type="input"
            onChange={(event) => setNewTask(event.target.value)}
          />
        </span>
        <span>
          <button
            onClick={() => {
              console.log("clicked");
              addTask({ name: newTask, isDone: false });
              setNewTask("");
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

// why is the todoList retrieved through todoActions?
// I thought todoActions is On  used meant for mapping Action for updates to Store?
const mapStateToProps = (state) => {
  return { todoList: state.todoReducers.todoList };
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (todo) => dispatch(add_task(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
