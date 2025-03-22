module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}