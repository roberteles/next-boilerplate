import NextI18Next from "next-i18next"
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ["es"],
    localeSubpaths,
    localePath: path.resolve('./public/static/locales')
})

export const { appWithTranslation, withTranslation } = NextI18NextInstance

export default NextI18NextInstance
