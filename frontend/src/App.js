import * as React from "react";
import Welcome from "./components/Welcome";
import Form from "./components/Fom";
import Questionpage from "./components/Questionpage";
import Thankyou from "./components/Thankyou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/question" element={<Questionpage />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
};
export default App;
