import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
        setTodos(response.data.todos);
        setLoading(false);
      });
    }, n * 1000);
  }, []);
  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(4);

  if (loading) {
    return <div>loading ...</div>;
  }
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
