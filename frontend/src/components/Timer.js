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

 const minutes = Math.floor(timeLeft / 60);
 const seconds = timeLeft % 60;

 return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export default useTimer;