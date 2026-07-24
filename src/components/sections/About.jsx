function About({ darkMode }) {
  return (
    <section
      id="about"
      className="py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className={`text-4xl lg:text-5xl font-bold text-center transition-colors duration-300 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          About Me
        </h2>

        <p
          className={`mt-4 text-center max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Learn more about my journey, passion, and the technologies
          I use to build modern digital experiences.
        </p>

      </div>
    </section>
  );
}

export default About;