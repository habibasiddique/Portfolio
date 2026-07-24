import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import Works from "./pages/Works";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${darkMode
        ? "bg-[#090E1A] text-white"
        : "bg-white text-slate-900"
        }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    <>
    <ScrollToTop />
    
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} />}
        />

        <Route
          path="/about"
          element={<About darkMode={darkMode} />}
        />

       
        <Route
          path="/works"
          element={<Works darkMode={darkMode} />}
        />

        <Route
          path="/Achievements"
          element={<Achievements darkMode={darkMode} />}
        />

        <Route
          path="/contact"
          element={<Contact darkMode={darkMode} />}
        />
      </Routes>
</>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;