// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', // npm install --save-dev @nuxtjs/tailwindcss
    '@vueuse/nuxt', // npm i -D @vueuse/nuxt @vueuse/core
  ],
  app: {
    head: {
      script: [
        { src: '/js/main.js', defer: true },
      ],
    },
  },
})
