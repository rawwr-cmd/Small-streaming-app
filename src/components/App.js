import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Go to page two </Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      This is page two
      <button>Click me</button>
      <Link to="/">GO to page one </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
      </Routes>
    </Router>
  );
};

export default App;
