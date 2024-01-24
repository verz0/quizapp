import * as React from "react";
import Welcome from "./components/Welcome";
import Form from "./components/Fom";
import Questionpage from "./components/Questionpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/question" element={<Questionpage />} />
      </Routes>
    </Router>
  );
};
export default App;
