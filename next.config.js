/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["uk"],
        defaultLocale: "uk",
    },
};

module.exports = nextConfig;
