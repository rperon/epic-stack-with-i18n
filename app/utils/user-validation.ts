import { z } from 'zod'

/**
 * User validation runtime translation keys
 * https://github.com/i18next/i18next-parser#caveats
 *
 * t('form.user.required')
 * t('form.user.tooShort')
 * t('form.user.tooLong')
 * t('form.user.invalidCharacters')
 */
export const UsernameSchema = z
	.string({ required_error: 'form.user.required' })
	.min(3, { message: 'form.user.tooShort' })
	.max(20, { message: 'form.user.tooLong' })
	.regex(/^[a-zA-Z0-9_]+$/, {
		message: 'form.user.invalidCharacters',
	})
	// users can type the username in any case, but we store it in lowercase
	.transform(value => value.toLowerCase())

export const PasswordSchema = z
	.string({ required_error: 'Password is required' })
	.min(6, { message: 'Password is too short' })
	.max(100, { message: 'Password is too long' })
export const NameSchema = z
	.string({ required_error: 'Name is required' })
	.min(3, { message: 'Name is too short' })
	.max(40, { message: 'Name is too long' })
export const EmailSchema = z
	.string({ required_error: 'Email is required' })
	.email({ message: 'Email is invalid' })
	.min(3, { message: 'Email is too short' })
	.max(100, { message: 'Email is too long' })
	// users can type the email in any case, but we store it in lowercase
	.transform(value => value.toLowerCase())
