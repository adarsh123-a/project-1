// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Auth/Login";
import Signup from "./Component/Signup";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" elmenet={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
