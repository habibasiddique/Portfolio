function ContactHero({ darkMode }) {
  return (
    <section
      className={`pt-40 pb-24 transition-all duration-300 ${
        darkMode ? "bg-[#090E1A]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-purple-400">
          📬 GET IN TOUCH
        </span>

        <h1
          className={`mt-8 text-5xl lg:text-7xl font-extrabold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Contact Me
        </h1>

        <p
          className={`mt-8 max-w-3xl mx-auto text-lg leading-9 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Have an internship opportunity, freelance project, or simply
          want to connect? I'd love to hear from you. Let's build
          something amazing together.
        </p>

      </div>
    </section>
  );
}

export default ContactHero;