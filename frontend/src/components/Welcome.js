import * as React from "react";
import { Button } from "@material-tailwind/react";
import {
  useNavigate,
} from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
//   const handleButtonClick = () => {
//     navigate("/question", {replace: false});
//   };

  return (
    <div>
      <div className="h-screen flex">
        <div className="w-2/3">
          <div className="flex justify-center items-center h-screen text-blue-texts font-thefont gap-y-3 p-8">
            <div>
              <p className="flex justify-center text-7xl">
                Welcome to ---------!
              </p>
              <p className="py-20 px-10 flex text-center text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.
                Faucibus nec gravida ipsum pulvinar vel.
              </p>
              <div className="flex justify-center">
                <Button
                  className="text-white bg-blue-texts rounded-full p-4"
                  onClick={()=> navigate("/question")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-right-blue">
          <div className="justify-center p-20 py-40 font-thefont text-white text-4xl">
            Do's and Don'ts
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
