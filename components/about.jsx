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

                <div className="border border-neutral-800 p-6">
                    <p className="text-emerald-400 font-medium mb-2">🎓 Education</p>

                    <p className="text-sm text-neutral-400">2022 - PRESENT</p>
                    <p className="text-neutral-100 font-semibold">Central Philippine University</p>

                    <p className="text-neutral-400 text-sm mb-4"> Bachelor of Science in Information Technology</p>
                </div>

                <div className="border border-neutral-800 p-6">
                    <p className="text-emerald-400 font-medium mb-2">📍 Location</p>
                    <p className="text-neutral-300">Iloilo, Philippines</p>
                </div>

                <div className="border border-neutral-800 p-6">
                    <p className="text-emerald-400 font-medium mb-2">🗣 Languages</p>

                    <p className="text-neutral-100 font-semibold">English</p>
                    <p className="text-neutral-400 text-sm mb-3">Fluent</p>

                    <p className="text-neutral-100 font-semibold"> Filipino</p>
                    <p className="text-neutral-400 text-sm mb-3">Fluent</p>
                </div>
            </div>
        </div>
    </section>
    );
}
