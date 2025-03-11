import "./App.css";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery  from "../src/pages/Gallery";

function App() {
  return (
      <main className="min-h-screen w-full bg-purple-700 text-teal-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
  );
}

export default App;
