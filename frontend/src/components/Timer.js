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
    return timeLeft;
  
};
export default useTimer;
