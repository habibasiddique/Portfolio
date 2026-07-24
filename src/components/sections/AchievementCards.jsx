
function AchievementCards({ darkMode }) {
  const achievements = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      subtitle: "CGPA: 3.72 / 4.00",
      description:
        "Maintaining a strong academic record throughout my BS Computer Science journey with consistent performance.",
     
    },
    {
      icon: "💻",
      title: "Prime Minister Youth Laptop Scheme",
      subtitle: "Government Achievement",
      description:
        "Selected under the Prime Minister's Youth Laptop Scheme in recognition of academic performance.",
      
    },
    {
      icon: "🏅",
      title: "Hackathon Participation",
      subtitle: "Competition",
      description:
        "Participated in a software development hackathon, collaborating on innovative solutions and improving teamwork skills.",
    
    },
    {
      icon: "🧩",
      title: "Harvard CS50x Puzzle Day",
      subtitle: "International Event",
      description:
        "Successfully participated in Harvard University's CS50x Puzzle Day, solving logical and programming challenges.",
    
    },
    {
      icon: "📖",
      title: "MOOCs English Test",
      subtitle: "Certification",
      description:
        "Completed an English proficiency assessment through MOOCs to strengthen communication skills.",
     
    },
  ];

  return (
    <section
      id="achievements"
      className={`pb-24 ${
        darkMode ? "bg-[#090E1A]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {achievements.map((item) => (

            <div
              key={item.title}
              className={`rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "bg-[#111827] border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,.18)]"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              <p className="mt-2 font-semibold text-purple-400">
                {item.subtitle}
              </p>

              <p
                className={`mt-5 leading-8 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>

             

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default AchievementCards;