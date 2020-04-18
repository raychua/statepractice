import {
  ADD_TASK_TYPE,
  DELETE_TASK_TYPE,
  TOGGLE_COMPLETE_TYPE,
} from "../todoActions/todoAction";

const initialState = {
  todoList: [
    { name: "Task 1", isDone: false },
    { name: "Task 2", isDone: true },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_TYPE: {
      return {
        ...state,
        todoList: [...state.todoList, action.todoitem],
      };
    }

    case DELETE_TASK_TYPE: {
      return {
        ...state,
        todoList: state.todoList.filter((todoitem) => {
          return !(todoitem.name === action.todoitem.name);
        }),
      };
    }

    case TOGGLE_COMPLETE_TYPE: {
      return {
        ...state,
        todoList: state.todoList.map((todoitem) => {
          if (todoitem.name === action.todoitem.name)
            todoitem.isDone = !action.todoitem.isDone;
          return todoitem;
        }),
      };
    }

    default:
      return state;
  }
}
