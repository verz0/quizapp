import useTimer from "./Timer";
import React from "react";
const Timebar = () => {
  const timeLeft = useTimer();
  const progressPercent = ((300 - timeLeft) / 300) * 100;

return (
    <div className='h-1 w-full bg-gray-300'>
        <div
            style={{ width: `${progressPercent}%`}}
            className={`h-full bg-blue-texts`}>
        </div>
    </div>
);
};
export default Timebar;
