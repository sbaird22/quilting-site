import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <main className="min-h-screen bg-purple-700">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);
