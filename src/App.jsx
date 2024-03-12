import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((response) => setTodos(response.data.todos));
  }, []);

  return (
    <>
      {todos.map((res) => (
        <Format todo={res} key={res.id} />
      ))}
    </>
  );
}

function Format({ todo }) {
  return (
    <>
      <div>Title :{todo.title}</div>
      <div>Description :{todo.description}</div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
