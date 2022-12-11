const path = require("path");

module.exports = {
  i18n: {
    locales: ["uz", "ru", "en"],
    defaultLocale: "en",
    localePath: path.resolve("./public/locales"),
    localeDetection: false,
  },
};
