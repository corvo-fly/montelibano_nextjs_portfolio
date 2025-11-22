export default function Footer() {
    return (
        <footer className="border-t border-neutral-900 bg-black text-neutral-500 text-xs md:text-sm">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
                <p>© {new Date().getFullYear()} Jophet Montelibano Jr. All rights reserved.</p>
                <p className="text-neutral-400">
                    Built with <span className="text-emerald-400">Next.js</span> & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
