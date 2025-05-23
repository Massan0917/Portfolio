// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
	  server: {
		  allowedHosts: ['massan0917.com']
	  }
  },
})
