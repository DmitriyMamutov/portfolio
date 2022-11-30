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
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
              name: "[name].[ext]",
              outputPath: "video"
          }
      },
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            enforce: 'pre',
          },
        },
      ],

    });

    return config;
  },
}

module.exports = withPlugins(
  [
    [nextTranslate],
    // Your other plugins here
  ],
  nextConfig
);
