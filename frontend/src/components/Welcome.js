import * as React from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Questionpage from "./Questionpage";
import { v4 as uuid } from "uuid";


const dateUnix=Date.now();
const date= new Date(dateUnix)
const hr = ('0' + date.getHours()).slice(-2);
const min = ('0' + date.getMinutes()).slice(-2); 
const sec = ('0' + date.getSeconds()).slice(-2); 
const curtime = `${hr}:${min}:${sec}`;

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roll_no = queryParams.get("roll_no");
//   const handleButtonClick = () => {
//     navigate("/question", {replace: false});
//   };
const handleStart = () => {
  
  navigate(`/question?roll_no=${roll_no}`);
  
  axios.post('http://127.0.0.1:8080/api/unprompted/',{"user": roll_no,"action":"Start","page":0,"time":curtime})
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Error while making the Axios request:', error);
  })
  
};


  return (
    <div>
    <div className="lg:flex lg:flex-row">
      <div className="lg:w-2/3">
        <div className="h-screen flex flex-col justify-center items-center text-blue-texts font-thefont gap-y-3 p-8">
          <div>
            <p className="flex justify-center text-7xl">Welcome to ---------!</p>
            <p className="py-20 px-10 flex text-center text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel.
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              className="text-white bg-blue-texts rounded-full p-4 mb-10"
              onClick={handleStart}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 bg-right-blue lg:order-first">
        <div className="justify-center p-20 py-40 font-thefont text-white text-4xl">
          Do's and Don'ts
        </div>
      </div>
    </div>
  </div>
  );
};
export default Welcome;
