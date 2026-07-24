import { useState } from "react";



import hackathon from "../../assets/certificates/hackathon.png.png";
import cs50x from "../../assets/certificates/cs50x.png.png";


function Certificates({ darkMode }) {
    const [current, setCurrent] = useState(0);

    const certificates = [
        {
            image: hackathon,
            title: "Hackathon Participation",
        },
        {
            image: cs50x,
            title: "Harvard CS50x Puzzle Day",
        },
    ];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % certificates.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? certificates.length - 1 : prev - 1
        );
    };
    return (


        <section
            className={`py-24 ${darkMode ? "bg-[#090E1A]" : "bg-gray-50"
                }`}
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-purple-400">
                        📜 PROFESSIONAL CERTIFICATIONS
                    </span>

                    <h2
                        className={`mt-6 text-5xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        Professional Certifications
                    </h2>

                    <p
                        className={`mt-5 max-w-3xl mx-auto text-lg leading-8 ${darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                    >
                        A collection of certifications earned through academic
                        excellence, international programs, hackathons, and
                        continuous learning.
                    </p>

                </div>
                <div className="relative mx-auto mt-10 max-w-4xl">

                    {/* Left Arrow */}

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16
  h-14 w-14 rounded-full border border-purple-500/30
  bg-[#111827] text-3xl text-purple-400
  transition-all duration-300
  hover:bg-purple-600 hover:text-white"
                    >
                        &#8592;
                    </button>

                    {/* Certificate Card */}

                    <div
                        className={`overflow-hidden rounded-3xl border ${darkMode
                            ? "border-purple-500/20 bg-[#111827]"
                            : "border-gray-200 bg-white shadow-xl"
                            }`}
                    >
                        <div className="flex justify-center bg-transparent p-0">
                            <img
                                src={certificates[current].image}
                                alt={certificates[current].title}
                                className="max-h-150 w-auto object-contain rounded-t-3xl"
                            />
                        </div>
                        <div className="p-8 text-center">

                            <h3
                                className={`text-3xl font-bold ${darkMode ? "text-white" : "text-slate-900"
                                    }`}
                            >
                                {certificates[current].title}
                            </h3>

                            <p
                                className={`mt-3 ${darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                            >
                                Certificate {current + 1} of {certificates.length}
                            </p>

                        </div>

                    </div>

                    {/* Right Arrow */}

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16
  h-14 w-14 rounded-full border border-purple-500/30
  bg-[#111827] text-3xl text-purple-400
  transition-all duration-300
  hover:bg-purple-600 hover:text-white"
                    >
                        &#8594;
                    </button>
                </div>

            </div>

        </section>
    );
}

export default Certificates;