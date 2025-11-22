"use client";

const projects = [
    {
        title: "Monty's Store Database System",
        year: "2025",
        role: "Database Designer & Developer",
        description: "A comprehensive database solution for a sari-sari tore, featuring a 7-table relational database design.",
        bullets: [
            "Designed a 7-table relational database for a sari-sari store",
            "Create ERD, data dictionary, views and stored procedures",
            "Implemented purchase and sales transactions using SQL Server",
            "Generated reports for inventory and low-stock monitoring",
        ],
        tags: ["SQL Server", "T-SQL", "Database Design", "ERD"],
    },

    // put more upcoming projects here in the future :)
    
]

export default function Projects(){
    return (
        <section
        id="projects"
        className="bg-black text-neutral-100 py-24 border-t border-neutral-900">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-semibold mb-10">
                    <span className="text-emerald-400 mr-2">02.</span> Projects
                </h2>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="border border-neutral-800 px-6 py-6 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all cursor-pointer"
                            onClick={() => window.open('/Montelibano_Data.pdf', '_blank')}>
                                <header className="mb-3 flex items-baseline gap-3">
                                    <h3 className="text-lg md:text-xl font-semibold">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs text-neutral-400">
                                        {project.year}
                                    </span>
                                </header>

                            <p className="text-emerald-300 text-sm mb-2">
                                {project.role}
                            </p>

                            <p className="text-sm text-neutral-300 mb-4">
                                {project.description}
                            </p>

                            <ul className="space-y-1 text-sm text-neutral-300 mb-4">
                                {project.bullets.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-emerald-400">✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 text-xs">
                                {project.tags.map((tag) => (
                                    <span key={tag}
                                    className="px-3 py-1 border border-neutral-700 bg-neutral-900 hover:border-emerald-400 hover:text-emerald-300 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}