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
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
}