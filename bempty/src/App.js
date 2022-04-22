import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import Campus from "./Campus";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header/>} >
            <Route index element={<Home/>} />
            <Route path="/Campus/:location" element={<Campus/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
