import type { Module } from '@nuxt/types'
import { GoogleFontsHelper } from 'google-fonts-helper'


export default <Module>async function (_options) {
    const nuxt = this.nuxt
    const DEFAULTS: ModuleOptions = {
        families: {},
        display: null,
        subsets: [],
        text: null,
        prefetch: true,
        preconnect: true,
        preload: true,
        useStylesheet: false,
        download: false,
        base64: false,
        inject: true,
        overwriting: false,
        outputDir: this.options.dir.assets,
        stylePath: 'css/fonts.css',
        fontsDir: 'fonts',
        fontsPath: '~assets/fonts'
    }
    const options = {
        ...DEFAULTS,
        ...(_options || {}),
        ...(nuxt.options.googleFonts || {}),
    }
    const googleFontsHelper = new GoogleFontsHelper({
        families: options.families,
        display: options.display,
        subsets: options.subsets,
        text: options.text
    })
    const url = googleFontsHelper.constructURL()
    this.options.meta.link.push({
        rel: 'stylesheet',
        href: `${url}&display=swap`,
    })
    this.options.meta.link.push({
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
    })
    this.options.meta.link.push({
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossOriginIsolated: true
    })
}
export interface ModuleOptions extends Partial<any> {
  prefetch?: boolean;
  preconnect?: boolean;
  preload?: boolean;
  useStylesheet?: boolean;
  download?: boolean;
  inject?: boolean;
}