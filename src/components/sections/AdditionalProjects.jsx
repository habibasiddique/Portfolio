import Button from "../ui/Button";
import algorithmLab from "../../assets/projects/algorithm-lab.png";
import housePricePrediction from "../../assets/projects/house-price-prediction.png";

const projects = [
  {
    image: algorithmLab,
    imageAlt: "AlgorithmLab",
    badge: "New Project",
    title: "AlgorithmLab",
    subtitle: "Sorting Algorithm Visualizer & Performance Analyzer",
    description:
      "AlgorithmLab is an interactive learning and performance analysis platform that makes algorithm behavior easier to understand through visualization and experimentation. Explore sorting algorithms, visualize their behavior, and analyze their performance using real execution data.",
    tech: [
      "Sorting Algorithms",
      "Data Visualization",
      "Performance Benchmarking",
      "Complexity Analysis",
    ],
    features: [
      "✔ Interactive Sorting Visualizer",
      "✔ Live Execution Statistics",
      "✔ Five-Algorithm Benchmark",
      "✔ Big-O & Stability Analysis",
    ],
    liveDemo: "https://algorithm-lab-habiba.vercel.app/",
    github: null,
  },
  {
    image: housePricePrediction,
    imageAlt: "AI House Price Prediction",
    badge: "New Project",
    title: "AI House Price Prediction",
    subtitle: "ML-Powered House Price Prediction Web App",
    description:
      "A machine learning project that predicts house prices using Linear Regression, delivered as an interactive Streamlit web app. Enter a property's details and get an instant price estimate powered by a trained regression model.",
    tech: [
      "Python",
      "Machine Learning",
      "Linear Regression",
      "Streamlit",
      "Jupyter Notebook",
    ],
    features: [
      "✔ Linear Regression Model",
      "✔ Interactive Streamlit App",
      "✔ Instant Price Estimates",
      "✔ Clean Prediction Interface",
    ],
    liveDemo:
      "https://ai-house-price-prediction-ct7keu5wsxv4rgivqdkc4e.streamlit.app/",
    github: "https://github.com/habibasiddique/AI-House-Price-Prediction",
  },
];

function AdditionalProjects({ darkMode }) {
  return (
    <>
      {projects.map((project) => (
        <section
          key={project.title}
          className={`py-24 ${darkMode ? "bg-[#090E1A]" : "bg-gray-50"}`}
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
                    {project.title}
                  </h2>

                  <p
                    className={`mt-4 max-w-2xl text-lg ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-5">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      Live Demo →
                    </Button>
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline"
                          darkMode={darkMode}>
                        GitHub Repository
                      </Button>
                    </a>
                  )}
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
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-[85%] mx-auto h-68 mt-6 object-cover rounded-xl"
                  />

                  {/* Content */}
                  <div className="p-10">
                    <span className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-5 py-2 text-purple-400 font-semibold">
                      {project.badge}
                    </span>

                    <h2
                      className={`mt-6 text-5xl font-bold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {project.title}
                    </h2>

                    <p className="mt-3 text-2xl font-semibold text-purple-400">
                      {project.subtitle}
                    </p>

                    <p
                      className={`mt-6 leading-9 text-lg ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mt-8">
                      {project.tech.map((tech) => (
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
                      {project.features.map((feature) => (
                        <p key={feature}>{feature}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default AdditionalProjects;
