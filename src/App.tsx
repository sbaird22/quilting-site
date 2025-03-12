import "./App.css";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery  from "../src/pages/Gallery";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

function App() {
  return (
      <main className="min-h-screen w-full bg-purple-950 text-teal-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
  );
}

export default App;
