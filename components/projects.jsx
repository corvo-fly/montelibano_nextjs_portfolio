"use client";

const projects = [
    {
        title: "Monty's Store Database System",
        year: "2025",
        role: "Database Designer & Developer",
        description:
        "A comprehensive database solution for a sari-sari store, featuring a 7-table relational database design.",
        bullets: [
            "Designed a 7-table relational database for a sari-sari store",
            "Created ERD, data dictionary, views and stored procedures",
            "Implemented purchase and sales transactions using SQL Server",
            "Generated reports for inventory and low-stock monitoring",
            ],
        tags: ["SQL Server", "T-SQL", "Database Design", "ERD"],
        link: "/Montelibano_Data.pdf",
    },
    {
        title: "Developer Portfolio Website",
        year: "2025",
        role: "Frontend Developer",
        description:
        "A responsive personal portfolio built with Next.js and Tailwind CSS to showcase projects, skills, and contact information.",
        bullets: [
            "Implemented a single-page layout with smooth scrolling between sections",
            "Designed a dark, developer-focused theme with consistent typography and spacing",
            "Built reusable components for the hero, about, projects, skills, and contact sections",
            "Deployed the site using Vercel with GitHub integration for continuous deployment",
        ],
        tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
        link: "https://github.com/corvo-fly/montelibano_nextjs_portfolio",
    },
    {
        title: "StudyHub Mobile Planner",
        year: "2024",
        role: "Mobile App Developer",
        description:
        "A mobile planner concept app built with Dart & Flutter to help students track tasks, deadlines, and study sessions.",
        bullets: [
            "Designed simple UI screens for tasks, schedules, and daily priorities using Flutter widgets",
            "Implemented local state management for adding, updating, and completing tasks",
            "Explored persistent storage options (e.g., local database / shared preferences) for saving task data",
            "Practiced structuring Flutter projects with clear separation between UI and logic layers",
        ],
        tags: ["Dart", "Flutter", "Mobile UI", "State Management"],
        link: undefined,
    },

// put more upcoming projects here in the future :)
];

export default function Projects() {
    const handleProjectClick = (link) => {
        if (!link) return;
        window.open(link, "_blank");
    };

return (
    <section
        id="projects"
        className="bg-black text-neutral-100 py-24 border-t border-neutral-900"
        >
    <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
            <span className="text-emerald-400 mr-2">02.</span> Projects
        </h2>

        <div className="space-y-8">
            {projects.map((project) => (
            <article
                key={project.title}
                className={`border border-neutral-800 px-6 py-6 transition-all ${
                project.link
                ? "hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] cursor-pointer"
                : ""
            }`}
            onClick={() => handleProjectClick(project.link)}
            >
                <header className="mb-3 flex items-baseline gap-3">
                    <h3 className="text-lg md:text-xl font-semibold">
                    {project.title}
                    </h3>
                        <span className="text-xs text-neutral-400">
                            {project.year}
                        </span>
                </header>

                <p className="text-emerald-300 text-sm mb-2">{project.role}</p>

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
                        <span
                            key={tag}
                            className="px-3 py-1 border border-neutral-700 bg-neutral-900 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
                        >
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
