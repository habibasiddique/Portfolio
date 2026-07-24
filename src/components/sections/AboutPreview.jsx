import { Link } from "react-router-dom";
import Button from "../ui/Button";

function AboutPreview({ darkMode }) {
  return (
    <section
      className={`py-8 transition-all duration-300 ${
        darkMode ? "bg-[#090E1A]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            About Me
          </h2>

          <p
            className={`mt-4 text-xl font-medium ${
              darkMode ? "text-purple-400" : "text-purple-600"
            }`}
          >
            Passion • Learning • Growth
          </p>

          <p
            className={`mt-5 max-w-3xl mx-auto text-lg leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I'm a passionate Computer Science student who enjoys building
            modern web applications, exploring Artificial Intelligence,
            and continuously improving my programming skills through
            real-world projects.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <h3
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Building Technology with Purpose
            </h3>

            <p
              className={`mt-6 leading-8 text-lg ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I'm Habiba Siddique, currently pursuing a BS in Computer
              Science at the University of Agriculture Faisalabad.
              My interests include Full-Stack Development, Artificial
              Intelligence, UI/UX Design, and creating software that
              solves real-world problems.
            </p>

            <p
              className={`mt-5 leading-8 text-lg ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Every project helps me improve my technical skills while
              strengthening creativity, teamwork, and problem-solving.
              I'm always excited to learn new technologies and build
              meaningful digital experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">

              <div>
                <h4 className="text-3xl font-bold text-purple-400">
                  10+
                </h4>
                <p
                  className={`mt-2 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Technologies
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-purple-400">
                  2+
                </h4>
                <p
                  className={`mt-2 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Projects
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-purple-400">
                  2024–
                </h4>
                <p
                  className={`mt-2 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Learning Journey
                </p>
              </div>

            </div>

            {/* Button */}
            <div className="mt-10">
              <Link to="/about">
                <Button>
                  Read More About Me →
                </Button>
              </Link>
            </div>

          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-6">

            {[
              {
                icon: "🐍",
                title: "Python Developer",
                desc: "Building AI, automation, and backend applications."
              },
              {
                icon: "💻",
                title: "Full-Stack Developer",
                desc: "Creating responsive web applications using modern technologies."
              },
              {
                icon: "🎨",
                title: "UI/UX Designer",
                desc: "Designing clean and user-friendly digital experiences."
              },
              {
                icon: "🤖",
                title: "AI Enthusiast",
                desc: "Exploring Machine Learning and Artificial Intelligence."
              }
            ].map((item) => (

              <div
                key={item.title}
                className={`group rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "border-purple-500/20 bg-[#111827] hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                    : "border-gray-200 bg-white shadow-lg"
                }`}
              >

                <div className="text-4xl mb-5">
                  {item.icon}
                </div>

                <h3
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-3 leading-7 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;