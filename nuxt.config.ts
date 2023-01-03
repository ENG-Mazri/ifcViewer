// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify', 'naive']
    },
    devServer:{
        port: 4500,
        url: 'http://localhost:4500'

    }
  
  
})
