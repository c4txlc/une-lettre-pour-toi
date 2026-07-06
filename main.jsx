import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Letter from "./Letter";
import TheBirthdayLetter from "./TheBirthdayLetter";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/the-birthday-letter" element={<TheBirthdayLetter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
