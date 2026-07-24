import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">
      <nav
        className={`
    flex items-center justify-between
    px-8 py-4
    transition-all duration-500
    ${scrolled
            ? "rounded-4xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent border-transparent shadow-none"
          }
  `}
      >
        {/* Logo */}

        <Link to="/" className="flex items-center gap-2">

          <span className="w-3 h-3 rounded-full bg-purple-600"></span>

          <span
            className={`transition-colors font-boldduration-300 ${darkMode ? "text-white" : "text-slate-900"
              }`}
          >
            Habiba Siddique
          </span>

        </Link>
        {/* Navigation */}

        <ul
          className={`hidden md:flex items-center gap-8 font-medium ${darkMode ? "text-gray-300" : "text-slate-700"
            }`}
        >
          <li>
            <Link
              to="/"
              className="transition duration-300 hover:text-purple-500"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="transition duration-300 hover:text-purple-500"
            >
              About
            </Link>
          </li>



          <li>
            <Link
              to="/works"
              className="transition duration-300 hover:text-purple-500"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/Achievements"
              className="transition duration-300 hover:text-purple-500"
            >
              Achievements
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className="transition duration-300 hover:text-purple-500"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Right Side */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl transition-transform duration-300 hover:scale-110"
          >
            {darkMode ? "🔆" : "🌙"}
          </button>

          <a
            href="../resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              View Resume ↗
            </Button>
          </a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;