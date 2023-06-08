import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar";
import LostSomethingMain from "./components/LostSomething/LostSomethingMain";
import HallBooking from "./components/HallBooking/HallBooking";


export default function App() {
  
  return (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/findlost' element={<LostSomethingMain/>} />
        <Route path='/hallbooking' element={<HallBooking/>} />
      </Routes>
    </Router>
  </div>
  );
}
