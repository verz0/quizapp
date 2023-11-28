import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Timer from "./Timer";
import Timebar from "./Timebar";
import Chat from "./chat";

const Questionpage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [resetHint, setResetHint] = useState(false);

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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const isContinueDisabled = !selectedOption || !question;

  const handleContinue = () => {
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

  return (
    <div className="h-screen w-screen divide-y divide-solid">
      <div className="h-4/5 flex">
        <div className="w-2/3 px-4">
          <div className="box-border p-4 text-lg text-blue-texts py-10">
            {question && question.question}
          </div>
          <div className="flex flex-col h-screen p-4 space-y-7">
            {question &&
              question.op1 && 
              [question.op1, question.op2, question.op3, question.op4].map(
                (option, index) => (
                  <Button
                    key={index}
                    className={`border border-blue-texts w-32 text-black p-4 rounded-lg ${
                      selectedOption === option
                        ? "bg-hover-color text-white"
                        : "hover:bg-hover-color hover:text-white"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </Button>
                )
              )}
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
        <div className="text-blue-texts">qn no</div>
        <Timebar />
        <div className="flex justify-center">
          <div className="text-blue-texts">
            Time remaining:
            <Timer />
            <div className="flex justify-normal items-center h-20">
              <Button
                className={`text-white bg-blue-texts rounded-full p-4 w-32 justify-items-end ${
                  isContinueDisabled ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                onClick={handleContinue}
                disabled={isContinueDisabled}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionpage;
