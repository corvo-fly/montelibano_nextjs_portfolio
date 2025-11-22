export default function Contact() {
    return (
        <section 
        id="contact"
        className="bg-black text-neutral-100 py-24 border-t border-neutral-900">
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">
                        <span className="text-emerald-400 mr-2">04.</span> Get In Touch
                    </h2>

                    <p className="text-sm md:text-base text-neutral-300 mb-8 leading-relaxed">
                        I&apos;m currently looking for opportunities to gain hands-on experience in
                        real-world IT environments. Whether you have a question or just want
                        to say hi, feel free to reach out!
                    </p>

                    <div className="space-y-4 text-sm">
                        <div className="flex gap-3 items-start">
                            <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">📧
                        </div>
                        <div>
                            <p className="text-neutral-400">Email</p>
                            <p className="text-emerald-300">jophetmontelibanojr@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">🐙
                    </div>
                    <div>
                        <p className="text-neutral-400">GitHub</p>
                        <a href="https://github.com/corvo-fly"
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-300 hover:underline"
                        >
                            github.com/corvo-fly
                        </a>
                    </div>
                    </div>

                    <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">📍
                        </div>
                        <div>
                            <p className="text-neutral-400">Location</p>
                            <p className="text-emerald-300">Mandurriao, Iloilo City</p>
                        </div>
                    </div>
                </div>
            </div>

            <form className="border border-neutral-800 p-6 space-y-4 text-sm">
                <div>
                    <label htmlFor="name" className="block mb-1 text-emerald-300">Name</label>
                    <input
                    id="name" type="text" required placeholder="Your Name" className="w-full bg-black border border-neutral-700 px-3 py-2 focus:outline-none focus:border-emerald-400 focus:ring-emerald-400 transition-all"/>
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 text-emerald-300">Email</label>
                    <input
                    id="email" type="email" required placeholder="your email@example.com" className="w-full bg-black border border-neutral-700 px-3 py-2 focus:outline-none focus:border-emerald-400 focus:ring-emerald-400 transition-all"/>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1 text-emerald-300">Message</label>
                    <textarea id="message" rows={4} required placeholder="Your message..."  className="w-full bg-black border border-neutral-700 px-3 py-2 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 transition-all resize-none"/>
                </div>

                <button type="submit" className="w-full mt-4 border border-emerald-400 text-emerald-300 py-2 hover:bg-emerald-400 hover:text-black transform hover:scale-105 transition-all">Send Message ✈</button>
            </form>
            </div>
        </section>
    );
}