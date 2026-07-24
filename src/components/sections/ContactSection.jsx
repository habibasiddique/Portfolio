import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection({ darkMode }) {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                "service_i62at1g",
                "template_2towjot",
                form.current,
                "MNljgeMgQZI9vcHnE"
            )
            .then(() => {
                setStatus("✅ Message sent successfully!");
                setLoading(false);
                form.current.reset();
            })
            .catch((error) => {
                console.log(error);
                setStatus("❌ Failed to send message.");
                setLoading(false);
            });
    };

    return (
        <section
            className={`pb-24 ${darkMode ? "bg-[#090E1A]" : "bg-gray-50"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-14">

                    {/* Left Side */}

                    <div>

                        <h2
                            className={`text-3xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            Contact Information
                        </h2>

                        <p
                            className={`mt-4 leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                                }`}
                        >
                            Feel free to reach out for internships, collaborations,
                            freelance opportunities, or just to say hello.
                        </p>

                        <div className="mt-10 space-y-5">

                            <div className={`rounded-2xl p-5 border ${darkMode
                                ? "bg-[#111827] border-purple-500/20"
                                : "bg-white border-gray-200"
                                }`}>
                                <strong>📧 Email</strong>
                                <p className="mt-2">habibasiddique@gmail.com</p>
                            </div>

                            <div className={`rounded-2xl p-5 border ${darkMode
                                ? "bg-[#111827] border-purple-500/20"
                                : "bg-white border-gray-200"
                                }`}>
                                <strong>📍 Location</strong>
                                <p className="mt-2">Faisalabad, Pakistan</p>
                            </div>

                            <div className={`rounded-2xl p-5 border ${darkMode
                                ? "bg-[#111827] border-purple-500/20"
                                : "bg-white border-gray-200"
                                }`}>
                                <strong>💻 GitHub</strong>
                                <a
                                    href="https://github.com/habibasiddique"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 block text-purple-400 hover:text-purple-300 hover:underline transition"
                                >
                                    github.com/habibasiddique
                                </a>
                            </div>

                            <div className={`rounded-2xl p-5 border ${darkMode
                                ? "bg-[#111827] border-purple-500/20"
                                : "bg-white border-gray-200"
                                }`}>
                                <strong>💼 LinkedIn</strong>
                                <a
                                    href="https://www.linkedin.com/in/habibasiddique1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 block text-purple-400 hover:text-purple-300 hover:underline transition"
                                >
                                    https://www.linkedin.com/in/habibasiddique1/
                                </a>
                            </div>

                            <div className={`rounded-2xl p-5 border ${darkMode
                                ? "bg-[#111827] border-purple-500/20"
                                : "bg-white border-gray-200"
                                }`}>
                                <strong>👨‍💻 LeetCode</strong>
                                <a
                                    href="https://leetcode.com/u/Habiba_Siddique/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 block text-purple-400 hover:text-purple-300 hover:underline transition"
                                >
                                    leetcode.com/u/Habiba_Siddique/
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div>

                        <h2
                            className={`text-3xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                }`}
                        >
                            Send Me a Message
                        </h2>

                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="mt-8 space-y-5"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className={`w-full rounded-xl border p-4 bg-transparent
                                    focus:border-purple-500
focus:ring-4
focus:ring-purple-500/20
focus:outline-none
transition-all
duration-300 ${darkMode
                                        ? "border-purple-500/20 text-white placeholder:text-slate-500"
                                        : "border-gray-300 text-slate-900 placeholder:text-slate-400"
                                    }`}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className={`w-full rounded-xl border p-4 bg-transparent
                                    focus:border-purple-500
focus:ring-4
focus:ring-purple-500/20
focus:outline-none
transition-all
duration-300 ${darkMode
                                        ? "border-purple-500/20 text-white placeholder:text-slate-500"
                                        : "border-gray-300 text-slate-900 placeholder:text-slate-400"
                                    }`}
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className={`w-full rounded-xl border p-4 bg-transparent
                                    focus:border-purple-500
focus:ring-4
focus:ring-purple-500/20
focus:outline-none
transition-all
duration-300 ${darkMode
                                        ? "border-purple-500/20 text-white placeholder:text-slate-500"
                                        : "border-gray-300 text-slate-900 placeholder:text-slate-400"
                                    }`}
                            />

                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Your Message"
                                required
                                className={`w-full rounded-xl border p-4 bg-transparent
                                    focus:border-purple-500
focus:ring-4
focus:ring-purple-500/20
focus:outline-none
transition-all
duration-300 ${darkMode
                                        ? "border-purple-500/20 text-white placeholder:text-slate-500"
                                        : "border-gray-300 text-slate-900 placeholder:text-slate-400"
                                    }`}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-3 rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading && (
                                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                                )}

                                {loading ? "Sending..." : "Send Message →"}
                            </button>

                            {status && (
                                <div
                                    className={`mt-6 rounded-2xl border p-4 text-center font-medium ${status.includes("successfully")
                                        ? "border-green-500/20 bg-green-500/10 text-green-400"
                                        : "border-red-500/20 bg-red-500/10 text-red-400"
                                        }`}
                                >
                                    {status}
                                </div>
                            )}

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ContactSection;