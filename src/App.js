import React from "react";
import "./App.css";
//import Todolist from "./components/Todolist";
//import Todolist1 from "./components/Todolist1";
//import ReactRouterPractice from "./components/ReactRouter";
//import Counter from "./components/Counter";
//import StoreCounter from "./components/StoreCounter";
import { Provider } from "react-redux";
import todoStore from "./todoStore/todoStore";
import TodoList from "./todoComponents/TodoList";

function App() {
  return (
    <Provider store={todoStore}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
