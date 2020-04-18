import React from "react";
//import displayTodos from "./Todo1";
import uuidv1 from "uuid/v1";
import "./Todo1.css";

class Todolist1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: uuidv1(), name: "Ask 2S do assessment", isDone: true },
        { id: uuidv1(), name: "Mark 2S assessment", isDone: true },
        { id: uuidv1(), name: "Revise with 2S", isDone: false },
        { id: uuidv1(), name: "Check 2S school SLS", isDone: false },
        { id: uuidv1(), name: "Buy Lunch", isDone: true },
        { id: uuidv1(), name: "Buy Dinner", isDone: true },
      ],
    };
  }

  setComplete(name) {
    const tempTodos = this.state.todos.map((task) => {
      if (task.name === name) {
        if (task.isDone) task.isDone = false;
        else task.isDone = true;
      }
      return task;
    });
    this.setState({ todos: [...tempTodos] });
  }

  deleteTodo(name) {
    const tempTodos = this.state.todos.filter((task) => {
      if (task.name === name) {
        return false;
      }
      return true;
    });
    this.setState({ todos: [...tempTodos] });
  }

  displayTodos(todos) {
    return this.state.todos.map((task) => {
      return (
        <div className="todolist">
          <span
            className="taskicon"
            onClick={() => this.setComplete(task.name)}
          >
            {task.isDone && (
              <img
                height="16"
                alt="done"
                src={`${process.env.PUBLIC_URL}/tick.png`}
              />
            )}
          </span>

          <span className="task">{task.name}</span>
          <span
            className="deleteicon"
            onClick={() => this.deleteTodo(task.name)}
          >
            <img
              height="16"
              alt="done"
              src={`${process.env.PUBLIC_URL}/delete.png`}
            />
          </span>
        </div>
      );
    });
  }

  handleChange = (event) => {
    this.setState({ newTaskName: event.target.value });
  };

  addTask = () => {
    const newTask = {
      name: this.state.newTaskName,
      id: uuidv1(),
      isDone: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <div>
          <span className="Label">Enter New Task</span>
          <input
            className="newTaskInput"
            type="text"
            value={this.state.newTaskName}
            placeholder="Input your task here"
            onChange={this.handleChange}
          />
          <button className="submit" onClick={this.addTask}>
            Add
          </button>
        </div>
        {this.displayTodos(this.state.todos)}
      </div>
    );
  }
}

export default Todolist1;
