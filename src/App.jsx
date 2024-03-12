import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r);
    }, 3000);
  }, []);

  return <>{render ? <Component /> : <div>empty</div>}</>;
}

const Component = () => {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);
  
  return (
    <>
      <div>Hello from Component</div>
    </>
  );
};

export default App;
