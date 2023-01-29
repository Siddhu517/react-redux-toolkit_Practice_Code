import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveTask } from "./store/reducer";

function App() {
  const [todo, setTodo] = useState("");

  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveTask(todo));
    setTodo("");
  };

  return (
    <div className="App">
      <div className="todo_list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div className="list">
          <ul>
            {todoList.tasks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
