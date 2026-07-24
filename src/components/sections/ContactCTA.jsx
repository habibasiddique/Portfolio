import Button from "../ui/Button";
import { Link } from "react-router-dom";
function ContactCTA({ darkMode }) {
    return (

        <section
            id="contact"
            className={`py-16 transition-all duration-300 ${darkMode ? "bg-[#090E1A]" : "bg-gray-50"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">

                <div
                    className={`rounded-[40px] border p-12 lg:p-16 text-center transition-all duration-300 ${darkMode
                        ? "border-cyan-500/20 bg-[#111827]"
                        : "border-slate-300 bg-white shadow-xl"
                        }`}
                >

                    {/* Heading */}
                    <p
                        className={`mb-4 font-semibold uppercase tracking-[0.25em] ${darkMode ? "text-cyan-400" : "text-cyan-600"
                            }`}
                    >
                        LET'S CONNECT
                    </p>

                    <h2
                        className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        Let's Build Something Amazing Together
                    </h2>

                    <p
                        className={`max-w-3xl mx-auto text-lg leading-8 mb-10 transition-colors duration-300 ${darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        Whether you're looking for a passionate Computer Science
                        student, a project collaborator, or simply want to connect,
                        I'd love to hear from you.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-5">

                        <Link to="/contact">
                            <Button>
                               📧Get In Touch
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

            </div>
        </section>
    );
}

export default ContactCTA;