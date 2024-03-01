import en from '#/app/locales/en'
import fr from '#/app/locales/fr'

// This is the list of languages your application supports
export const supportedLngs = ['fr', 'en']

// This is the language you want to use in case
// if the user language is not in the supportedLngs
export const fallbackLng = 'en'

// The default namespace of i18next is "translation", but you can customize it
// here
export const defaultNS = 'common'

export const resources = {
	en: { common: en },
	fr: { common: fr },
}
