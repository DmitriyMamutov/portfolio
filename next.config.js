/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en", // Should be the same as in i18n file
    locales: ["en"], // Should be the same as in i18n file
  },
};

module.exports = withPlugins(
  [
    [nextTranslate],
    // Your other plugins here
  ],
  nextConfig,
);
