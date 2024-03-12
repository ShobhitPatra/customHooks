import React, { useEffect, useState } from "react";

const useOnline = (n) => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (window.navigator.onLine) {
        setIsOnline(true);
      }
    }, [n]);
  }, n * 1000);

  return isOnline;
};

function Online() {
  const isOnline = useOnline(3);
  return <>{isOnline ? <div>online</div> : <div>offline</div>}</>;
}

export default Online;
