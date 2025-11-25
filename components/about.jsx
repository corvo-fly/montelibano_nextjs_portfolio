/* eslint-disable @next/next/no-img-element */
export default function About() {
    return (
    <section 
    id="about"
    className="bg-black text-neutral-100 py-24 border -t border-neutral-900">
        <div className=" max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">

            <div>
                <h2 className="text-xl md:text-2x1 font-semibold mb-6">
                    <span className="text-emerald-400 mr-2">01.</span> About Me
                </h2>

                <div className="flex justify-center mb-10">
                    <div className="group">
                        <div
                            className="w-64 h-44 md:w-48 md:h-56 rounded-2xl overflow-hidden border border-emerald-400/70 bg-neutral-900 shadow-[0_0_18px_rgba(16,185,129,0.35)] transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(16,185,129,0.55)] group-hover:-translate-y-1">
                            <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover scale-150 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-neutral-300 mb-4 leading-relaxed">
                    Motivated BS Information Technology student with skills in database design,
                    SQL, programming, and mobile development. Currently building academic projects
                    focused on system automation and application development.
                </p>

                <p className="text-neutral-300 mb-4 leading-relaxed">
                    Eager to gain hands-on experience in real-world IT environments while
                    continuously improving technical and problem-solving skills.
                </p>
            </div>

            <div className="space-y-6">

                <div className="p-6 border border-neutral-800">
                    <h3 className="text-emerald-300 font-semibold mb-2 flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 14.25L3.75 9.75 12 5.25l8.25 4.5-8.25 4.5z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 10.5v4.5c0 .621.504 1.125 1.125 1.125h8.25A1.125 1.125 0 0017.25 15v-4.5"
                            />
                        </svg>
                    Education
                    </h3>
                    <p className="text-sm text-neutral-400">2022 - PRESENT</p>
                    <p className="font-medium">Central Philippine University</p>
                    <p className="text-sm text-neutral-300">
                        Bachelor of Science in Information Technology
                    </p>
                </div>

                <div className="p-6 border border-neutral-800">
                    <h3 className="text-emerald-300 font-semibold mb-2 flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21c4-4.5 6-7.5 6-10.5a6 6 0 10-12 0c0 3 2 6 6 10.5z"
                            />    
                        </svg>
                        Location
                    </h3>
                <p className="text-neutral-300">Iloilo, Philippines</p>
                </div>

                <div className="p-6 border border-neutral-800">
                    <h3 className="text-emerald-300 font-semibold mb-2 flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5} 
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5.25h6M6 3v4.5m-3 4.5h4.5A2.25 2.25 0 019.75 14.25v0A2.25 2.25 0 017.5 16.5H6l2.25 4.5M13.5 5.25h7.5m-3.75-2.25v4.5M15 21l2.25-4.5"
                            />
                        </svg>
                        Languages
                    </h3>

                    <p className="font-medium">English</p>
                    <p className="text-sm text-neutral-400">Fluent</p>

                    <p className="font-medium mt-2">Filipino</p>
                    <p className="text-sm text-neutral-400">Fluent</p>
                </div>

            </div>
        </div>
    </section>
    );
}
