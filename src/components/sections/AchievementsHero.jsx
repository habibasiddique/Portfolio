import Button from "../ui/Button";
import HeroBackground from "../ui/HeroBackground";
import { Link } from "react-router-dom";

function AchievementsHero({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden pt-36 pb-24 transition-all duration-300 ${
        darkMode ? "bg-[#090E1A]" : "bg-gray-50"
      }`}
    >
      {darkMode && <HeroBackground />}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* Badge */}

        <span className="inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-purple-400">
          🏆 ACHIEVEMENTS
        </span>

        {/* Heading */}

        <h1
          className={`mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Celebrating Every
          <span className="block text-purple-400">
            Milestone
          </span>
        </h1>

        {/* Subtitle */}

        <p
          className={`mt-8 max-w-3xl mx-auto text-lg leading-8 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Every certificate, achievement, and milestone reflects my
          dedication to learning, innovation, and continuous growth as a
          Computer Science student.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

      
          

          <Link to="/contact">
            <Button variant="outline"
             darkMode={darkMode}>
              Contact Me
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default AchievementsHero;