import * as React from "react";
import Welcome from "./components/Welcome";
import Questionpage from "./components/Questionpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/question" element={<Questionpage />} />
      </Routes>
    </Router>
  );
};
export default App;
