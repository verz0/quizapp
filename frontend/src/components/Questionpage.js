import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Timer from "./Timer";
import Chat from "./chat";
import { useLocation } from "react-router-dom";


const Questionpage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [resetHint, setResetHint] = useState(false);
  
  const location = useLocation();
  const {user_id}=location.state;
  const user=JSON.stringify(user_id);
  console.log(user_id);
  const dateUnix=Date.now();
  const date= new Date(dateUnix)
  const hr = ('0' + date.getHours()).slice(-2);
  const min = ('0' + date.getMinutes()).slice(-2); 
  const sec = ('0' + date.getSeconds()).slice(-2); 
  const curtime = `${hr}:${min}:${sec}`;
  // console.log(curtime);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/questions/"
        );
        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setQuestions(response.data);
        } else {
          console.error("F.");
        }
      } catch (error) {
        console.error("err", error);
      }
    };

    fetchData();
  }, []);

  const question = questions[currentQuestionIndex];
  const totalQuestionCount = questions.length;
  const currentQuestionPercent =
    ((currentQuestionIndex + 1) / totalQuestionCount) * 100;

  const handleOptionClick = (option,index) => {
    // console.log(action);
    // console.log(index);
    let va="A";
    if(index==1){
      va="B";
    }
    else if(index==2){
      va="C";
    }
    else if(index==3){
      va="D";
    }
    const pageno=JSON.stringify(currentQuestionIndex+1);
    
    const details={"user_id":user,"uid_no":0,"action":va,"page":pageno,"time":curtime}
    // console.log(details);
    axios.post('http://127.0.0.1:8080/api/unprompted/',details)
    .then(response => {
      console.log(response.data); 
      setSelectedOption(option);
    })
    .catch(error => {
      console.error('Error while making the Axios request:', error);
    });
    setSelectedOption(option);
    
  };

  

  const isContinueDisabled = !selectedOption || !question;
  const handleContinue = () => {
    const pageno=JSON.stringify(currentQuestionIndex+1)
    axios.post('http://127.0.0.1:8080/api/unprompted/',{"user_id":user,"uid_no":0,"action":"Continue","page":pageno,"time":curtime})
    .then(response => {
      console.log(response.data); 
    })
    .catch(error => {
      console.error('Error while making the Axios request:', error);
    });
    if (!isContinueDisabled && question) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedOption(null);
        setResetHint((prev) => !prev);
      } else {
        console.log("End of questions");
      }
    }
  };
  
  const handleTimeOut = () => {
      // console.log(currentQuestionIndex);
    const nextQuestionIndex = currentQuestionIndex + 1;
    // console.log(nextQuestionIndex);
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
      setResetHint((prev) => !prev);
    } else {
      console.log("End of questions");
    }
  };

  return (
    <div className="h-screen w-screen divide-y divide-solid">
      <div className="h-4/5 flex">
        <div className="w-2/3 px-4">
          <div className="box-border p-4 text-lg text-blue-texts py-10">
            Q.{currentQuestionIndex + 1} {question && question.question}
          </div>
          <div className="flex flex-col h-screen p-4 space-y-7">
            {question &&
              [question.op1, question.op2, question.op3, question.op4].map((option, index) => (
                <Button
                  key={index}
                  className={`border border-blue-texts w-32 text-black p-4 rounded-lg ${
                    selectedOption === option
                      ? "bg-hover-color text-white"
                      : "hover:bg-hover-color hover:text-white"
                  }`}
                  onClick={() => handleOptionClick(option,index)}
                >
                  {option}
                </Button>
              ))}
          </div>
        </div>
        <div className="w-1/3 bg-blue-50">
          <div className="h-10 bg-blue-texts w-fill flex justify-center text-white">
            AI Assistance
          </div>
          <div
            className="bg-blue-50 p-4"
            style={{ whiteSpace: "break-spaces" }}
          >
            <Chat text={question && question.misleading_suggestion} resetHint={resetHint} />
          </div>
        </div>
      </div>
      <div className="h-1/5 px-12">
        <div className="h-5"></div>
        <div className="text-blue-texts">
          {currentQuestionIndex + 1 + "/" + totalQuestionCount}
        </div>
        <div className="h-1 w-full bg-gray-300">
          <div
            style={{ width: `${currentQuestionPercent}%` }}
            className={`h-full bg-blue-texts`}
          ></div>
        </div>
        <div className="flex justify-center">
          <div className="text-blue-texts">
            Time remaining 
            <Timer />
            {/* {Timer()==="0:0" && handleTimeOut()} */}
            {console.log(currentQuestionIndex)}
            <div className="flex justify-normal items-center h-20">
              <div>
                {currentQuestionIndex + 1 != totalQuestionCount && (
                  <Button
                    className={`text-white bg-blue-texts rounded-full p-4 w-32 justify-items-end ${
                      isContinueDisabled ? "bg-gray-400 cursor-not-allowed" : ""
                    }`}
                    onClick={handleContinue}
                    disabled={isContinueDisabled}
                  >
                    Continue
                  </Button>
                )}
                {currentQuestionIndex + 1 == totalQuestionCount && (
                  <Button
                    className={`text-white bg-blue-texts rounded-full p-4 w-32 justify-items-end ${
                      isContinueDisabled ? "bg-gray-400 cursor-not-allowed" : ""
                    }`}
                    onClick={handleContinue}
                    disabled={isContinueDisabled}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionpage;
