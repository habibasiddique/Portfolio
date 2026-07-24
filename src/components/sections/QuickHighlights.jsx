import { Link } from "react-router-dom";
import Button from "../ui/Button";

function QuickHighlights({ darkMode }) {
    return (
        <section
            className={`py-16 transition-all duration-300 ${darkMode ? "bg-[#090E1A]" : "bg-gray-50"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center mb-10">

                    <h2
                        className={`text-4xl lg:text-5xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        Quick Highlights
                    </h2>

                    <p
                        className={`mt-4 text-xl font-medium ${darkMode ? "text-purple-400" : "text-purple-600"
                            }`}
                    >
                        Featured Achievements
                    </p>

                    <p
                        className={`mt-2 max-w-2xl mx-auto text-lg leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        A few milestones that showcase my academic excellence,
                        continuous learning, and passion for technology.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid gap-4 lg:grid-cols-2">

                    {/* Card 1 */}
                    <div
                        className={`group rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${darkMode
                                ? "border-purple-500/20 bg-[#111827] hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                                : "border-gray-200 bg-white shadow-lg"
                            }`}
                    >
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl">
                            💻
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                            2026
                        </p>

                        <h3
                            className={`mt-3 text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            PM Youth Laptop Scheme
                        </h3>

                        <p
                            className={`mt-5 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            Selected under the Prime Minister's Youth Laptop Scheme
                            based on academic merit, supporting my learning and
                            software development journey.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className={`group rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${darkMode
                                ? "border-purple-500/20 bg-[#111827] hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                                : "border-gray-200 bg-white shadow-lg"
                            }`}
                    >
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl">
                            🏆
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                            2025
                        </p>

                        <h3
                            className={`mt-3 text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            Harvard CS50x Puzzle Day
                        </h3>

                        <p
                            className={`mt-5 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            Participated in Harvard CS50x Puzzle Day, strengthening
                            logical thinking, teamwork, and real-world problem-solving
                            skills.
                        </p>
                    </div>

                </div>

                {/* Button */}
                <div className="mt-14 flex justify-center">
                    <Link to="/achievements">
                        <Button>
                            View All Achievements →
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default QuickHighlights;