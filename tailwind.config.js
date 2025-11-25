module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {
            keyframes: {
                "fade-up": {
                    "0%": { opacity: 0, transform: "translateY(40px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-up": "fade-up 1.2s ease-out forwards",
                },

        },
    },
    plugins: [],
};