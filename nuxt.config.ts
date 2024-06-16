export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'Dashboard | Example',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  runtimeConfig: {
    public: {
      api: 'https://data.directory.openbankingbrasil.org.br/participants',
    },
  },
});
