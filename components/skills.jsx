export default function Skills() {
    const skillTags = [
        {
            title: "Database & Backend",
            items: ["SQL / PL/SQL", "SQL Server Management Studio"],
        },
        {
            title: "Programming",
            items: ["Java / Python", "HTML / CSS / JavaScript", "Dart & Flutter"],
        },
        {
            title: "Design & Development",
            items: ["UI/UX Basics", "Git / GitHub"],
        },
        {
            title: "Soft Skills",
            items: ["Problem-Solving", "Teamwork"],
        },
    ];

    const techTags = [
        "SQL",
        "PL/SQL",
        "SQL Server",
        "Dart",
        "Flutter",
        "UI/UX",
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Python",
        "Git",
    ];

    return (
        <section
        id="skills"
        className="bg0black text-neural-100 py-24 border-t border-neutral-900">
            <div className="max-w-5x1 mx-auto px-4">
                <h2 className="text-x1 md:text-2xl font-semibold mb-10">
                    <span className="text-emerald-400 mr-2">03.</span> Skills
                </h2>

                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {skillTags.map((group) => (
                        <div 
                        key={group.title}
                        className="border border-neural-800 p-6 text-sm hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all">
                            <p className="text-emerald-400 font-medium mb-3">{group.title}</p>
                            <ul className="space-y-1 text-neutral-300">
                                {group.items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-emerald-400">›</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border border-neutral-800 p-6">
                    <p className="text-emerald-400 font-medium mb-4 text-sm">
                        Tech Stack Overview 
                    </p>

                    <div className="flex flex-wrap gap-3">
                    {techTags.map((tag) => (
                        <span
                        key={tag}
                        className="px-4 py-2 text-sm border border-neutral-700 bg-neutral-900 hover:border-emerald-400 hover:text-emerald-300 transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}