import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useTimer = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300);
  

  useEffect(() => {
    if (timeLeft <= 0) 
    navigate("/thankyou");
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