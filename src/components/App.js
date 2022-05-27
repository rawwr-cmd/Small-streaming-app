import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne, BAD APPROACH FOR NAVIGATION!
      <a href="/pagetwo">GO to page two</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      This is page two
      <button>Click me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageOne />} exact />
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
