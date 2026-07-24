import Button from "../ui/Button";
import nexaMart from "../../assets/projects/nexamart.png.png";

function ProjectCard({ darkMode }) {
  return (
    <section
      id="featured-project"
      className={`min-h-screen py-35 ${
        darkMode ? "bg-[#090E1A]" : "bg-gray-50"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[40%_60%] lg:gap-15">
          <div className="space-y-8">
            {/* Heading */}
            <div className="text-center lg:text-left">
              <p className="text-purple-400 font-semibold uppercase tracking-[0.25em]">
                Featured Work
              </p>

              <h2
                className={`mt-4 text-5xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Featured Project
              </h2>

              <p
                className={`mt-4 max-w-2xl text-lg ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Here is one of my latest projects showcasing modern frontend
                development and responsive UI design.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://nexa-mart-dusky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Live Demo →
                </Button>
              </a>

              <a
                href="https://github.com/habibasiddique/NexaMart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline"
                    darkMode={darkMode}>
                  GitHub Repository
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div
              className={`w-full max-w-4xl mx-auto rounded-[35px] overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "bg-[#111827] border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,.15)]"
                  : "bg-white border-gray-200 shadow-xl"
              }`}
            >
              {/* Image */}
              <img
                src={nexaMart}
                alt="Nexa Mart"
                className="w-[85%] mx-auto h-68 mt-6 object-cover rounded-xl"
              />

              {/* Content */}
              <div className="p-10">
                <span className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-5 py-2 text-purple-400 font-semibold">
                  Latest Project
                </span>

                <h2
                  className={`mt-6 text-5xl font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Nexa Mart
                </h2>

                <p className="mt-3 text-2xl font-semibold text-purple-400">
                  Modern E-Commerce Website
                </p>

                <p
                  className={`mt-6 leading-9 text-lg ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Nexa Mart is a responsive e-commerce website developed using
                  React and Tailwind CSS. It provides a clean shopping experience
                  with responsive layouts, smooth navigation, reusable components,
                  and a modern user interface.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div
                  className={`grid md:grid-cols-2 gap-4 mt-10 ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  <p>✔ Fully Responsive Design</p>
                  <p>✔ Product Catalog</p>
                  <p>✔ Shopping Cart System</p>
                  <p>✔ Modern UI / UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;