"use client"; 

import { useEffect, useState } from "react";

const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("hero");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const sections = links
            .map((link) => document.getElementById(link.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        sections.forEach((sec) => sec && observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-neutral-800">
            <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <button
                    onClick={() =>
                        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-semibold tracking-tight text-sm md:text-base text-emerald-400 cursor-pointer">
                    &lt;JM /&gt;
                </button>


                <ul className="hidden md:flex gap-6 text-sm">
                    {links.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => handleClick(link.id)}
                                className={`transition-colors ${
                                    active === link.id
                                            ? "text-emerald-400"
                                            : "text-neutral-300 hover:text-emerald-300"
                                }`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button className="md:hidden text-sm border border-neutral-700 rounded-lg px-3 py-1" onClick={() => setOpen((o) => !o)}>
                    Menu 
                </button>
            </nav>

            {open && (
                <div className="md:hidden border-t border-neutral-800 bg-black/95">
                    <ul className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
                        {links.map((link) => (
                            <li key={link.id}>
                            <button
                                onClick={() => handleClick(link.id)}
                                className={`w-full text-left py-1 ${
                                    active === link.id
                                        ? "text-emerald-400"
                                        : "text-neutral-300 hover:text-emerald-300"
                                }`}
                            >
                                {link.label}
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}