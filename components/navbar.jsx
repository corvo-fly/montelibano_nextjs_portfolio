'use client';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-neutral-800">
            <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* LOGOG */}
                <span className="font-semibold tracking-tight text-emerald-400">
                    &lt;JM /&gt;
                </span>

                <ul className="flex gap-6 text-sm text-neutral-300">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}