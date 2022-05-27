import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/streams/create" element={<StreamCreate />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
        <Route path="/streams/show" element={<StreamShow />} />
      </Routes>
    </Router>
  );
};

export default App;
