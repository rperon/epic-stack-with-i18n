import { createCookie } from '@remix-run/node'
import { RemixI18Next } from 'remix-i18next/server'
import * as i18n from '#/app/config/i18n'

export const i18nCookie = createCookie('en_lang', {
	sameSite: 'lax',
	path: '/',
	secure: process.env.NODE_ENV === 'production',
	httpOnly: true,
})

export const i18next = new RemixI18Next({
	detection: {
		supportedLanguages: i18n.supportedLngs,
		fallbackLanguage: i18n.fallbackLng,
		cookie: i18nCookie,
	},
	// This is the configuration for i18next used
	// when translating messages server-side only
	i18next: {
		...i18n,
	},
})
