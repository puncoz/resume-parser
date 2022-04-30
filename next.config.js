const withPWA = require("next-pwa")

/** @type {import("next").NextConfig} */
const settings = {
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
}

module.exports = process.env.NODE_ENV === "production" ? withPWA({
    pwa: {
        dest: "public",
    },
    ...settings,
}) : settings
