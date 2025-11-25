export default function Hero() {
    return(
        <section 
        id="hero"
        className="min-h-[calc(100vh-4rem)] flex items-center bg-black text-neutral-100">
            <div className="max-w-5xl mx-auto  px-4">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-4">
                    &gt; Hello, I&apos;m
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
                    JOPHET MONTELIBANO JR.
                </h1>

                <p className="text-emerald-300 text-sm md:text-base mb-4">
                    BS Information Technology Student | Database Developer
                </p>

                <p className="max-w-xl text-sm md:text-base text-neutral-300 mb-8">
                    Building a robust database systems and modern applications with a focus on
                    system automation and real-world IT solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="px-6 py-2 border border-emerald-400 text-emerald-400 text-sm md:text-base hover:bg-emerald-400 hover:text-black transform hover:scale-105 transition-all duration-200">
                        Explore My Work ⬇
                    </a>

                    <a href="https://github.com/corvo-fly" target="_blank" rel="noreferrer"
                    className="px-6 py-2 border border-neutral-700 text-neutral-200 text-sm md:text-base hover:border-emerald-400 hover:text-emerald-300 transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-emerald-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48v-1.7c-2.78.63-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.58 2.34 1.13 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.15-4.55-5.14 0-1.14.38-2.07 1.03-2.8-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.07A9.16 9.16 0 0112 6.78c.85 0 1.72.12 2.53.35 1.9-1.35 2.74-1.07 2.74-1.07.56 1.43.21 2.49.1 2.75.65.73 1.03 1.66 1.03 2.8 0 4-2.34 4.88-4.57 5.14.36.32.68.97.68 1.96v2.9c0 .26.18.57.69.48A10.06 10.06 0 0022 12.26C22 6.58 17.52 2 12 2z"
                                clipRule="evenodd"  
                            />
                        </svg>
                            <span>GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/YOUR-LINK/" target="_blank" rel="noreferrer"
                    className="px-6 py-2 border border-neutral-700 text-neutral-200 text-sm md:text-base hover:border-emerald-400 hover:text-emerald-300 transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-emerald-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3v-12zm7.5 0h3.83v1.64h.06c.53-.96 1.83-1.97 3.76-1.97 4.02 0 4.76 2.65 4.76 6.1v6.23h-4v-5.52c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.92v5.62h-4v-12z" />
                        </svg>
                            <span>LinkedIn</span>
                    </a>

                </div>
            </div>
        </section>
    );
}