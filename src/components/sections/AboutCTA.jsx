import Button from "../ui/Button";
import { Link } from "react-router-dom";

function AboutCTA({ darkMode }) {
  return (
    <section
      className={`py-20 transition-all duration-300 ${
        darkMode ? "bg-[#090E1A]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2
          className={`text-4xl font-bold transition-colors duration-300 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Want to Collaborate?
        </h2>

        <p
          className={`mt-4 text-lg leading-8 max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I'm always open to internship opportunities,
          collaborations, and exciting projects.
          Let's build something meaningful together.
        </p>

        <div className="mt-8 flex justify-center">
          <Link to="/contact">
            <Button>
              Contact Me →
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutCTA;