module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "fade-up": {
                    "0%": { opacity: 0, transform: "translateY(16px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.6s ease-out forwards",
            },
        },
    },
    plugins: [],
};