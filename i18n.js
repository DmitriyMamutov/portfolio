module.exports = {
  defaultLocale: "en",
  locales: ["en", "ua"],
  pages: {
    "*": ["common"], // We use one common file for all translations
    "/": ["index"],
  },
  loadLocaleFrom: (lang, ns) => import(`./static/locales/${lang}/${ns}.json`).then((m) => m.default),
};
