import React from "react";
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import Campus from "./components/Campus";
import Classrooms from "./components/Classrooms"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header/>} >
                <Route index element={<Home/>} />
                <Route path="/Campus/:location" element={<Campus/>} />
                <Route path="/Classrooms" element={<Classrooms/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
