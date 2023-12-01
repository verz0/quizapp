import { useEffect, useState } from "react";

const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300);
  

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timeout = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [timeLeft]);
var m=Math.floor(timeLeft%3600/60);
var s=Math.floor(timeLeft % 3600 % 60);
  return `${m}:${s}`;
};
export default useTimer;