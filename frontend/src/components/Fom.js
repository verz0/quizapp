import React, { useState } from "react";
import Welcome from "./Welcome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BorderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roll_no: "",
    name: "",
    email: "",
    consent: false
  });

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8080/api/users/',formData)
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Error while making the Axios request:', error);
  })
  console.log(formData);
    navigate(`/Welcome?roll_no=${formData.roll_no}`);

  };

  return (
    <div className="flex justify-center items-center h-screen px-5 bg-gradient-to-b from-blue-texts to-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto sm:h-30 h-30 border border-blue-texts p-6 rounded-lg bg-white md:w-1/2"
      >
        <div className="flex justify-center items-center mb-10 text-3xl text-blue-texts">Welcome</div>
        <div className="flex justify-center items-center mb-10 text-xl text-blue-texts">Please enter the following details before getting started</div>
        <div className="mb-7">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-blue-texts"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-blue-texts p-2.5 rounded-md w-full"
            placeholder="enter your name"
            required
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="roll_no"
            className="block mb-2 text-sm font-medium text-blue-texts"
          >
            Roll Number
          </label>
          <input
            type="text"
            id="roll_no"
            name="roll_no"
            value={formData.roll_no}
            onChange={handleChange}
            className="border border-blue-texts p-2.5 rounded-md w-full"
            placeholder="enter your roll number"
            required
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-blue-texts"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-blue-texts p-2.5 rounded-md w-full max-w-md"  // Set max width
            placeholder="am.en.u4cse22001@am.students.amrita.edu"
            required
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2 "
            style={{marginBottom:"8.7rem"}}
            required
          />
          <label htmlFor="consent" className="text-xs text-blue-texts mb-7">
          We take the protection of your privacy seriously and adhere to strict guidelines to maintain anonymity. No individual-level data will ever be shared outside our research team, ensuring complete confidentiality of all information provided by you. By participating in this survey, you agree to provide honest and accurate responses. Your participation is voluntary, and you may withdraw at any time without penalty. By submitting your completed survey, you are giving us permission to use your responses for research purposes only.
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-texts hover:bg-[#4999c4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full py-2.5 text-center"
        >
          Submit
        </button>
      </form>

    </div>

  );
};

export default BorderForm;