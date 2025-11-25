import Image from "next/image";

export default function About() {
    return (
        <section
        id="about"
        className="bg-black text-neutral-100 py-24 border-t border-neutral-900"
        >
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 items-start">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-8">
                        <span className="text-emerald-400 mr-2">01.</span> About Me
                    </h2>

                <div className="flex flex-col items-center md:items-start mb-8">
                    <div className="inline-block rounded-3xl border border-emerald-500/70 bg-black/40 shadow-[0_0_40px_rgba(16,185,129,0.45)] overflow-hidden hover:shadow-[0_0_55px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all duration-300">
                        <Image
                            src="/profile.jpg"               
                            alt="Jophet Montelibano Jr."
                            width={320}
                            height={380}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="space-y-4 text-sm md:text-base text-neutral-300 leading-relaxed">
                    <p>
                        I&apos;m a BS Information Technology student with a strong focus on{" "}
                        database design, SQL, and application development. I enjoy turning
                        real-world problems into structured systems, especially when it
                        involves relational databases and clean, reliable data flows.
                    </p>

                    <p>
                        Throughout my academic projects I&apos;ve worked on designing
                        normalized schemas, writing stored procedures, and building
                        end-to-end solutions that connect the database layer with simple
                        user interfaces. I also explore programming with Java, Python,
                        HTML/CSS/JavaScript, and Dart &amp; Flutter, which helps me bridge
                        backend logic with usable frontends and mobile experiences.
                    </p>

                    <p>
                        Right now I&apos;m looking for opportunities to gain hands-on
                        experience in real-world IT environments—whether that&apos;s
                        database work, automation, or web and mobile development. I enjoy
                        collaborating with others, debugging tricky issues, and
                        continuously improving my problem-solving and technical skills.
                    </p>
                </div>
                </div>

                <div className="space-y-6 text-sm md:text-base">
                    <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-950/40">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 flex items-center justify-center rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-emerald-400"
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
                                        d="M6.75 10.5v4.5c0 .621.504 1.125 1.125 1.125h8.25c.621 0 1.125-.504 1.125-1.125v-4.5"
                                    />
                                </svg>
                            </div>
                                <h3 className="font-semibold text-neutral-100">Education</h3>
                        </div>

                            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">
                                2022 – Present
                            </p>
                            <p className="font-medium text-neutral-100">
                                Central Philippine University
                            </p>
                            <p className="text-neutral-300">
                                Bachelor of Science in Information Technology (BSIT)
                            </p>
                    </div>

                    <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-950/40">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21c4.5-4 7.5-7.5 7.5-11a7.5 7.5 0 10-15 0c0 3.5 3 7 7.5 11z"
                        />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </div>
                <h3 className="font-semibold text-neutral-100">Location</h3>
            </div>

            <p className="text-neutral-300">Mandurriao, Iloilo City</p>
            </div>

            <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-950/40">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12c0-4.556 3.694-8.25 8.25-8.25S18.75 7.444 18.75 12s-3.694 8.25-8.25 8.25c-.893 0-1.757-.138-2.568-.395L3.75 21.75l1.895-3.755A8.181 8.181 0 012.25 12z"
                            />
                        </svg>
                    </div>
                        <h3 className="font-semibold text-neutral-100">Languages</h3>
                </div>

                <ul className="space-y-1 text-neutral-300">
                    <li>
                    <span className="font-medium text-neutral-100">English</span>{" "}
                        – Fluent
                    </li>
                    <li>
                    <span className="font-medium text-neutral-100">Filipino</span>{" "}
                        – Fluent
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
);
}
