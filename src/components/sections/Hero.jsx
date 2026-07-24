
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../../assets/images/habiba.png";
function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-18"
    >
      <div className="max-w-7xl mx-auto w-full px-6 ">

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">

          <div className="space-y-3">

            {/* Availability Badge */}
            <div
              className={`inline-flex items-center gap-3 rounded-full px-4 py-2 border transition-all duration-300 ${darkMode
                ? "border-purple-500/30 bg-purple-500/10"
                : "border-purple-300 bg-purple-100"
                }`}
            >
              <span
                className={`text-sm font-medium transition-colors duration-300 ${darkMode ? "text-slate-300" : "text-slate-900"
                  }`}
              >
                🚀 Building the Future
              </span>
            </div>

            {/* Welcome */}

            <div className="space-y-2">


              <h2
                className={`text-3xl transition-colors duration-300 ${darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
              >
                Hi, I'm
              </h2>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span
                  className={`transition-colors duration-300 ${darkMode ? "text-white" : "text-slate-900"
                    }`}
                >
                  Habiba
                </span>

                <span className="bg-linear-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                  {" "}Siddique
                </span>

              </h1>
            </div>

            {/* Subtitle */}
            <div className="space-y-2">
              <h3
                className={`text-2xl font-semibold transition-colors duration-300 ${darkMode ? "text-white" : "text-slate-900"
                  }`}
              >
                Software Engineer

                <span className="mx-2 text-purple-500">
                  •
                </span>

                Full-Stack Developer
              </h3>
              <p className="text-lg font-medium tracking-wide text-purple-400">
                🤖Crafting Modern Digital Experiences
              </p>

            </div>
            {/* Description */}
            <p
              className={`max-w-1xl text-lg leading-6 transition-colors duration-300 ${darkMode ? "text-slate-400" : "text-slate-700"
                }`}
            >
              Passionate Computer Science student pursuing a BS in Computer
              Science at the University of Agriculture, Faisalabad.
              I enjoy building modern web applications with React,
              Python, and Java and am always eager to improve my skills.
            </p>
            <div className="space-y-2 cursor-pointer">
              <div className="mt-8 flex flex-wrap gap-6 cursor-pointer ">
                <Link to="/works">
                  <Button>
                    View Projects →
                  </Button>
                </Link>

                <a href="/resume.pdf" download>
                  <Button variant="outline"
                    darkMode={darkMode}>
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-6">

              <a
                href="https://github.com/habibasiddique"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors cursor-pointer duration-300 ${darkMode
                  ? "text-slate-300 hover:text-purple-400"
                  : "text-slate-700 hover:text-purple-600"
                  }`}
              >
                💻 GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/habibasiddique1/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors cursor-pointer duration-300 ${darkMode
                  ? "text-slate-300 hover:text-purple-400"
                  : "text-slate-700 hover:text-purple-600"
                  }`}
              >
                🔗 LinkedIn
              </a>

            </div>
            {/* Technology Pills */}



          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div
                className={`absolute -top-8 -left-12 z-20 rounded-2xl border backdrop-blur-xl px-5 py-3 shadow-xl transition-all duration-300 ${darkMode
                  ? "border-white/10 bg-white/10"
                  : "border-slate-300 bg-white"
                  }`}
              >
                <p
                  className={`text-sm transition-colors duration-300 ${darkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                >
                  Skills
                </p>

                <h3
                  className={`text-lg font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-black"
                    }`}
                >
                  React • Python
                </h3>
              </div>

              <div
                className={`absolute -bottom-8 -right-12 z-20 rounded-2xl border backdrop-blur-xl px-5 py-3 shadow-xl transition-all duration-300 ${darkMode
                  ? "border-white/10 bg-white/10"
                  : "border-slate-300 bg-white"
                  }`}
              >
                <p
                  className={`text-sm transition-colors duration-300 ${darkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                >
                  Current GPA
                </p>

                <h3
                  className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-black"
                    }`}
                >
                  3.5+
                </h3>
              </div>

              {/* Purple Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-purple-500/20 blur-3xl"></div>

              {/* Image Card */}
              <div
                className={`relative z-10 overflow-hidden rounded-[36px] p-3 backdrop-blur-xl  cursor-pointer transition-all duration-500 ease-out  hover:scale-95 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30  ${darkMode
                  ? "border border-white/10 bg-white/5"
                  : "border border-slate-300 bg-white shadow-lg"
                  }`}
              >
                <img
                  src={profile}
                  alt="Habiba Siddique"
                  className="w-60 sm:w-65 md:w-70 lg:w-75 xl:w-[320px] rounded-[28px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

            </div>
          </div>

        </div>
        {/* Technical Skills */}

        <div className="mt-5 w-full flex flex-col items-center">
          <div
            className={`w-48 h-0.5 mx-auto mb-4 rounded-full transition-all duration-300 ${darkMode
              ? "bg-linear-to-r from-transparent via-purple-400/60 to-transparent"
              : "bg-linear-to-r from-transparent via-purple-500/40 to-transparent"
              }`}
          />
          <h3
            className={`text-2xl font-bold mb-4 transition-colors duration-300 ${darkMode ? "text-white" : "text-slate-900"
              }`}
          >
            🟣 Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-2">

            {[
              "Python",
              "Java",
              "React",
              "Node.js",
              "C++",
              "SQL",
              "Git",
              "GitHub",
              "HTML",
              "CSS",
              "JavaScript",
            ].map((skill) => (
              <span
                key={skill}
                className={`cursor-default rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${darkMode
                  ? "border-white/10 bg-white/5 text-slate-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700"
                  }`}
              >
                {skill}
              </span>
            ))}

          </div>

        </div>


      </div>

    </section>
  );
}

export default Hero;