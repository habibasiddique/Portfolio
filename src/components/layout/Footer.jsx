function Footer({ darkMode }) {
    return (
        <footer className="border-t border-white/10 py-14 px-6">

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

                {/* Left */}

                <div>
                    <h2
                        className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        Habiba Siddique
                    </h2>

                    <p className="mt-5 text-slate-400 leading-8">
                        Computer Science Student passionate about Full-Stack Development,
                        Python, AI, UI/UX Design and building modern web applications.
                    </p>
                </div>

                {/* Middle */}

                <div>

                    <h3  className={`text-2xl font-semibold transition-colors duration-300 ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        Navigation
                    </h3>

                    <ul className="space-y-3 text-slate-400">

                        <li><a href="#home" className="hover:text-purple-400">Home</a></li>

                        <li><a href="#about" className="hover:text-purple-400">About</a></li>

                        <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>

                        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>

                        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>

                    </ul>

                </div>

                {/* Right */}

                <div>

                    <h3
                        className={`text-2xl font-semibold transition-colors duration-300 ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        Connect
                    </h3>

                    <div
                        className={`space-y-3 transition-colors duration-300 ${darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        <p>
                            📧{" "}
                            <a
                                href="mailto:habibasidique@gmail.com"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                Email
                            </a>
                        </p>

                        <p>
                            💻{" "}
                            <a
                                href="https://github.com/habibasiddique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                GitHub
                            </a>
                        </p>

                        <p>
                            🔗{" "}
                            <a
                                href="https://www.linkedin.com/in/habibasiddique1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                LinkedIn
                            </a>
                        </p>

                        <p>
                            📄{" "}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition-colors duration-300"
                            >
                                Resume
                            </a>
                        </p>
                    </div>

                </div>

            </div>

            <div className="mt-12 border-t border-white/10 pt-8 text-center text-slate-500">

                © 2026 Habiba Siddique. All Rights Reserved.

            </div>

        </footer>
    );
}

export default Footer;