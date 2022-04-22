import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import Campus from "./Campus";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="Home" element={<Home/>} />
          <Route path="Campus" element={<Campus/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
