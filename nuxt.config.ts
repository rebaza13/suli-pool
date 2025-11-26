// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
  // SCSS file in the project
  "~/assets/scss/main.scss", 
],

  modules: ["@nuxtjs/i18n"],
})