import { createStore, combineReducers } from "redux";
import todoReducers from "./todoReducer";

const reducers = combineReducers({
  todoReducers,
});

export default createStore(reducers);
