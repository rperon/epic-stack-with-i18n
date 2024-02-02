// import the original type declarations
import 'i18next'
// import all namespaces (for the default language, only)
import type common from 'public/locales/en/common.json'

declare module 'i18next' {
	// Extend CustomTypeOptions
	interface CustomTypeOptions {
		// custom namespace type, if you changed it
		defaultNS: 'common'
		// custom resources type
		resources: {
			common: typeof common
		}
		// other
	}
}
