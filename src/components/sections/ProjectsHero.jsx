import Button from "../ui/Button";
import HeroBackground from "../ui/HeroBackground";

function ProjectsHero({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden min-h-[75vh] flex items-center transition-all  duration-300 ${darkMode ? "bg-[#090E1A]" : "bg-gray-50"
        }`}
    >
      {darkMode && <HeroBackground />}
      <div className="max-w-7xl mx-auto px-20 text-center relative z-10">

        {/* Badge */}

        <span className="inline-block mt-40 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-400 tracking-wide">
          💼 MY WORK
        </span>

        {/* Heading */}

        <h1
          className={`mt-2 text-5xl lg:text-7xl font-extrabold leading-tight ${darkMode ? "text-white" : "text-slate-900"
            }`}
        >
          Featured
          <span className="text-purple-400"> Projects</span>
        </h1>

        {/* Subtitle */}

        <p
          className={`mt-4 text-xl font-medium ${darkMode ? "text-purple-400" : "text-purple-600"
            }`}
        >
          ➡️ Turning Ideas into Reality
        </p>

        {/* Description */}

        <p
          className={`mt-12 max-w-3xl mx-auto text-lg leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
            }`}
        >
          Every project represents a milestone in my learning journey.
          I enjoy creating modern, responsive, and user-focused
          applications while continuously improving my development
          skills through real-world experiences.
        </p>

        {/* Buttons */}

        <div className="mt-18 flex flex-wrap justify-center gap-5">

          <a href="#featured-project">
            <Button>
              Explore Projects ↓
            </Button>
          </a>

          <a
            href="https://github.com/habibasiddique"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline"
            darkMode={darkMode}>
              Visit GitHub
            </Button>
          </a>

        </div>

      </div>
    </section>
  );
}

export default ProjectsHero;