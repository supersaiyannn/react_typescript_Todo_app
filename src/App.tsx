import React from "react";
import AddTodo from "./Components/AddTodo";
import CompTodos from "./Components/CompTodos";
import NavBar from "./Components/NavBar";
import "./App.css";
const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT APP</h1>
      <NavBar />
      <AddTodo />
      <CompTodos />
    </main>
  );
};

export default App;
