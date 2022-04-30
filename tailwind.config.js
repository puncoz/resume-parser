const colors = require("tailwindcss/colors")

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
                secondary: colors.lime,
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
    ],
}
