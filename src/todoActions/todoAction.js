export const ADD_TASK_TYPE = "ADD_TASK";
export const DELETE_TASK_TYPE = "DELETE_TASK";
export const TOGGLE_COMPLETE_TYPE = "TOGGLE_COMPLETE";

export const add_task = (todo) => {
  return {
    type: ADD_TASK_TYPE,
    param: todo,
  };
};

export const delete_task = (name) => {
  return {
    type: DELETE_TASK_TYPE,
    param: name,
  };
};

export const toggle_complete = (name) => {
  return {
    type: TOGGLE_COMPLETE_TYPE,
    param: name,
  };
};
