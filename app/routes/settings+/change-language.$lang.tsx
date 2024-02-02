import { invariant } from '@epic-web/invariant'
import { redirect, json, type ActionFunctionArgs } from '@remix-run/node'
import { i18nCookie } from '#app/utils/i18next.server.ts'

export async function loader() {
	return redirect('/')
}

export async function action({ params }: ActionFunctionArgs) {
	const { lang } = params
	invariant(lang, 'lang is required')
	return json(null, {
		headers: {
			'set-cookie': await i18nCookie.serialize(lang),
		},
	})
}
