import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import AboutCTA from "../components/sections/AboutCTA";
function About({ darkMode }) {
    return (
        <section
            id="about"
            className={`min-h-screen scroll-mt-24 pt-26 pb-8 px-6 py-20 transition-colors duration-500 ${darkMode ? "bg-[#090E1A]" : "bg-white"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">

                {/* Badge */}

                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3">
                    <span
                        className={`text-sm font-medium ${darkMode ? "text-purple-300" : "text-purple-700"
                            }`}
                    >
                        ✨ Passion • Learning • Innovation
                    </span>
                </div>

                {/* Heading */}

                <h1
                    className={`mt-6 text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                >
                    Building My Future,
                    <br />

                    <span className="bg-linear-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                        One Project at a Time.
                    </span>
                </h1>

                {/* Description */}

                <p
                    className={`mt-4 max-w-3xl mx-auto text-lg leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                >
                    I'm Habiba Siddique, a passionate Computer Science student
                    dedicated to Full-Stack Development, Artificial Intelligence,
                    and creating modern web applications that solve real-world
                    problems.
                </p>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                    <Link to="/works">
                        <Button>
                            View Projects →
                        </Button>
                    </Link>

                    <Link to="/contact">
                        <Button
                            variant="outline"
                            darkMode={darkMode}
                        >
                            Get In Touch
                        </Button>
                    </Link>

                </div>
                {/* ================= My Story ================= */}

                <div
                    className={`mt-10 rounded-3xl border p-8 lg:p-12 transition-all duration-300 ${darkMode
                        ? "border-white/10 bg-white/5 backdrop-blur-xl"
                        : "border-slate-200 bg-white shadow-xl"
                        }`}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                            <span className="text-2xl">📖</span>
                        </div>

                        <h2
                            className={`text-3xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            My Story
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <p
                            className={`text-lg leading-8 ${darkMode ? "text-slate-300" : "text-slate-700"
                                }`}
                        >
                            Hi, I'm <span className="font-semibold text-purple-500">Habiba Siddique</span>,
                            a BS Computer Science student at the University of Agriculture,
                            Faisalabad. My journey into technology began with a curiosity
                            for problem-solving, which gradually grew into a passion for
                            software development and creating impactful digital solutions.
                        </p>

                        <p
                            className={`text-lg leading-8 ${darkMode ? "text-slate-300" : "text-slate-700"
                                }`}
                        >
                            I enjoy building modern web applications using React, Python,
                            and Java while continuously exploring Artificial Intelligence,
                            UI/UX Design, and emerging technologies. Every project I build
                            helps me improve my technical skills and prepares me for a
                            successful career as a Full-Stack Software Engineer.
                        </p>
                    </div>
                </div>
                {/* ================= My Skills ================= */}

                <div className="mt-16">

                    <div className="text-center mb-8">

                        <h2
                            className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            My Skills
                        </h2>

                        <p
                            className={`mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            A showcase of my technical skills and areas of expertise.
                        </p>

                    </div>

                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">

                    {/* Card 1 */}
                    <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500 hover:-translate-y-2 transition duration-300">
                        <div className="mb-5 text-4xl">🐍</div>

                        <h3 className="text-xl font-semibold text-white">
                            Python Developer
                        </h3>

                        <p className="mt-3 text-slate-400 leading-7">
                            Building automation scripts, AI applications,
                            data-driven solutions, and backend systems using Python.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500 hover:-translate-y-2 transition duration-300">
                        <div className="mb-5 text-4xl">💻</div>

                        <h3 className="text-xl font-semibold text-white">
                            Full-Stack Developer
                        </h3>

                        <p className="mt-3 text-slate-400 leading-7">
                            Developing responsive web applications using
                            React, JavaScript, Node.js, and modern web technologies.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500 hover:-translate-y-2 transition duration-300">
                        <div className="mb-5 text-4xl">🎨</div>

                        <h3 className="text-xl font-semibold text-white">
                            UI/UX Designer
                        </h3>

                        <p className="mt-3 text-slate-400 leading-7">
                            Designing clean, modern, and user-friendly
                            interfaces with a focus on usability and aesthetics.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500 hover:-translate-y-2 transition duration-300">
                        <div className="mb-5 text-4xl">🤖</div>

                        <h3 className="text-xl font-semibold text-white">
                            AI Enthusiast
                        </h3>

                        <p className="mt-3 text-slate-400 leading-7">
                            Exploring Machine Learning, Artificial Intelligence,
                            and building intelligent real-world applications.
                        </p>
                    </div>

                </div>

                {/* ================= Education & Career ================= */}

                <div className="mt-16">

                    <div className="text-center mb-8">

                        <h2
                            className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            Education & Career Goals
                        </h2>

                        <p
                            className={`mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            My academic journey and future aspirations.
                        </p>

                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">

                        {/* Education Card */}

                        <div
                            className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-2 ${darkMode
                                ? "border-white/10 bg-white/5 hover:border-purple-500/40"
                                : "border-slate-200 bg-white shadow-lg hover:border-purple-300"
                                }`}
                        >

                            <div className="text-5xl mb-4">
                                🎓
                            </div>

                            <h3
                                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                    }`}
                            >
                                Education
                            </h3>

                            <p
                                className={`mt-5 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                Currently pursuing a Bachelor's degree in Computer Science
                                at the University of Agriculture Faisalabad.
                            </p>

                            <div className="mt-8 space-y-3">

                                <div className="flex justify-between">

                                    <span className="font-medium">
                                        Degree
                                    </span>

                                    <span className="text-purple-500 font-semibold">
                                        BS Computer Science
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="font-medium">
                                        CGPA
                                    </span>

                                    <span className="text-purple-500 font-semibold">
                                        3.72
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Career Card */}

                        <div
                            className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-2 ${darkMode
                                ? "border-white/10 bg-white/5 hover:border-purple-500/40"
                                : "border-slate-200 bg-white shadow-lg hover:border-purple-300"
                                }`}
                        >

                            <div className="text-5xl mb-4">
                                🚀
                            </div>

                            <h3
                                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                    }`}
                            >
                                Career Goal
                            </h3>

                            <p
                                className={`mt-5 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                My goal is to become a professional Full-Stack Software
                                Engineer while continuously exploring Artificial Intelligence,
                                Cloud Computing, and scalable web technologies.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                {[
                                    "Full Stack",
                                    "Artificial Intelligence",
                                    "Cloud",
                                    "Open Source"
                                ].map((item) => (

                                    <span
                                        key={item}
                                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${darkMode
                                            ? "border-purple-500/20 bg-purple-500/10 text-purple-300"
                                            : "border-purple-300 bg-purple-50 text-purple-700"
                                            }`}
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>
                {/* ================= Quick Stats ================= */}

                <div className="mt-20">

                    <div className="text-center mb-6">

                        <h2
                            className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            Quick Highlights
                        </h2>

                        <p
                            className={`mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            A quick overview of my learning journey and achievements.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            {
                                number: "10+",
                                title: "Technologies"
                            },
                            {
                                number: "2+",
                                title: "Projects"
                            },
                            {
                                number: "3.72",
                                title: "CGPA"
                            }


                        ].map((item, index) => (

                            <div
                                key={index}
                                className={`rounded-3xl border p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${darkMode
                                    ? "border-white/10 bg-white/5 hover:border-purple-500/40"
                                    : "border-slate-200 bg-white shadow-lg hover:border-purple-300"
                                    }`}
                            >

                                <h3 className="text-5xl font-extrabold bg-linear-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                                    {item.number}
                                </h3>

                                <p
                                    className={`mt-4 font-medium ${darkMode ? "text-slate-300" : "text-slate-700"
                                        }`}
                                >
                                    {item.title}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
                <>
                    {/* About Content */}

                    <AboutCTA darkMode={darkMode} />
                </>
            </div>
        </section>
    );
}

export default About;