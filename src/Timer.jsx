import React, { useEffect, useState } from "react";

const useCount = (n) => {
  const [count, setCount] = useState(0);
  const countEffect = useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, n * 1000);
    return clearInterval(countEffect);
  }, [n]);
  return count;
};

function Timer() {
  const count = useCount(2);
  return <div>{count}</div>;
}

export default Timer;
