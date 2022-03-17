import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    dev: process.env.NODE_ENV !== 'production',
    router:{
        
    },
    env: {
        baseURL: process.env.BASE_URL
    },
    server: {
        port: (process.env.PORT as any) as number || 8080,
    },
    buildModules: ['@pinia/nuxt', '@vueuse/nuxt', 
    [
        './modules/fonts/index.ts',{
            families: {
                Heebo: [300,400,500,700,800,900]
            }
        }
    ]],
    ignore: [`**/pages_old/**`,`pages_old/**`],
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
        BASE_URL: process.env.BASE_URL,
        VUE_APP_PORT: parseInt(process.env.VUE_APP_PORT),
        VUE_APP_API_BASE_URL: process.env.VUE_APP_API_BASE_URL,
        VUE_APP_MEDIA_BASE_URL: process.env.VUE_APP_MEDIA_BASE_URL,
        VUE_APP_URL: process.env.VUE_APP_URL,
        VUE_APP_LOCALE: process.env.VUE_APP_LOCALE,
        VUE_APP_SENTRY_DSN: process.env.VUE_APP_SENTRY_DSN,
        VUE_APP_SENTRY_DISABLED: process.env.VUE_APP_SENTRY_DISABLED,
        VUE_APP_PAYPLUS_CURRENCY: process.env.VUE_APP_PAYPLUS_CURRENCY,
        VUE_APP_MIXPANEL_DEBUG: process.env.VUE_APP_MIXPANEL_DEBUG == "true",
        VUE_APP_MIXPANEL_TOKEN: process.env.VUE_APP_MIXPANEL_TOKEN
    },
    vite: {
        css: {
            preprocessorOptions:{
                sass: {
                }
            }
        }
    }
})
