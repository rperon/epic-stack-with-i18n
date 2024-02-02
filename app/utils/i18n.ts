import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const i18n = {
	// This is the list of languages your application supports
	supportedLngs: ['en', 'fr'],
	// This is the language you want to use in case
	// if the user language is not in the supportedLngs
	fallbackLng: 'en',
	// The default namespace of i18next is "translation", but you can customize it here
	defaultNS: 'common',
	// Disabling suspense is recommended
	react: { useSuspense: true },
}

export function useChangeLanguage(locale: string) {
	const { i18n } = useTranslation()
	useEffect(() => {
		i18n.changeLanguage(locale)
	}, [locale, i18n])
}

export const useLocale = () => {
	const { i18n } = useTranslation()
	return i18n.language
}
