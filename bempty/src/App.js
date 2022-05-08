import React from "react";
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import Campus from "./components/Campus";
import Search from "./components/Search";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            <Route index path="/" element={<Home/>} />
            <Route path="/search/*" element={<Search/>} />
            <Route path="/campus/:location" element={<Campus/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
