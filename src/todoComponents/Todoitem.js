import React from "react";
import "../todoComponents/Todo1.css";
import { connect } from "react-redux";
import { delete_task, toggle_complete } from "../todoActions/todoAction";

function Todoitem(Todoitem) {
  return (
    <div className="task">
      <span className="taskicon">
        {Todoitem.isDone && (
          <img
            height="16"
            src={`${process.env.PUBLIC_URL}/tick.png`}
            alt="task is completed"
            onClick={this.toggleCompleteTask(Todoitem.name)}
          />
        )}
      </span>
      {Todoitem.name}
      <span>
        <img
          height="16"
          src={`${process.env.PUBLIC_URL}/delete.png`}
          alt="To delete task"
          onClick={this.deleteTask(Todoitem.name)}
        />
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCompletask: (name) => dispatch(toggle_complete(name)),
  deleteTask: (name) => dispatch(delete_task(name)),
});

export default connect(mapDispatchToProps)(Todoitem);
