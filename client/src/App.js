import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";


export default function App() {
  
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </Router>
  </div>
  );
}
