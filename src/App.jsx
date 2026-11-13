import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Adminlogin from "./admin/Adminlogin";
import Userlogin from "./user/Userlogin";
import Usersignup from "./user/Usersignup";
import { ToastContainer } from "react-toastify";
import Admindashboard from "./admin/Admindashboard";
import Userdashboard from "./user/Userdashboard";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/usersignup" element={<Usersignup />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/userdashboard" element={<Userdashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
