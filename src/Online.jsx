import React, { useEffect, useState } from "react";

const useOnline = (n) => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    setInterval(() => {
      window.addEventListener("online", () => setIsOnline(true));
      window.addEventListener("offline", () => setIsOnline(false));
    }, n * 1000);
  }, [n]);

  return isOnline;
};

function Online() {
  const isOnline = useOnline(3);
  return <>{isOnline ? <div>online</div> : <div>offline</div>}</>;
}

export default Online;
