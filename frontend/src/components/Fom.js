import React, { useState } from "react";
import Welcome from "./Welcome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BorderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    navigate("/Welcome");
  };

  return (
    <div className="flex justify-center items-center h-screen px-5 bg-gradient-to-b from-blue-texts to-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto h-3/4 border border-blue-texts p-6 rounded-lg bg-white md:w-1/2"
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
            htmlFor="rollNo"
            className="block mb-2 text-sm font-medium text-blue-texts"
          >
            Roll Number
          </label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            className="border border-blue-texts p-2.5 rounded-md w-full"
            placeholder="enter your roll number"
            required
          />
        </div>
        <div className="mb-20">
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
            className="border border-blue-texts p-2.5 rounded-md w-full"
            placeholder="am.en.u4cse22001@am.students.amrita.edu"
            required
          />
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
