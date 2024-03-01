# [Epic Stack](https://github.com/epicweb-dev/epic-stack) with [i18next](https://https://www.i18next.com) and [remix-i18next](https://github.com/sergiodxa/remix-i18next)

<img width="1368" alt="Screenshot epic stack in french" src="https://github.com/rperon/epic-stack-with-i18n/assets/692098/0cdca101-1a67-4d53-89a9-d6287564372f">

This demonstrates how to use [i18next](https://www.i18next.com/) and
[remix-i18next](https://github.com/sergiodxa/remix-i18next) with the
[Epic Stack](https://github.com/epicweb-dev/epic-stack). It includes a dropdown
menu to switch from one language to an another.

This exemple is based on the usage of a cookie to save the user language but
there is other way to do so, like saving the language in the user object or
using the url.

To check out the changes, check
[the git commit history](https://github.com/rperon/epic-stack-with-i18n/commit/052f19716e210dbed8bcac64e8d82021f5506c5b).
The important parts are:

1. Update on `entry.client.tsx` and `entry.server.tsx` to add language browser
   detection, on the client and the server.
2. `app/utils/i18n.ts` contains default configuration and ability to change
   language.
3. `app/utils/i18n.server.ts` contains the initialisation of `remix-i18n`, it is
   configured to use a cookie named `en_lang` to save the user language when the
   user switch language. This cookie is used for ssr, to create an html with the
   right `lang` like this `<html lang="fr" ... >` inside the `root.tsx`.
4. Inside `root.tsx`, i added a dropdown menu to let the user switch language.
   I'm also retrieving in the loader the current locale.
5. To change the language, a Form is send to `/change-language/${lang}` where i
   set the cookie.
6. The translation files are located in `public/locales/${lang}/common.json`.
   i18next support multiple namespaces for storing the translation. In this
   example, i'm only using one named `common` as the default namespace.
7. Inside a React function, you can translate string by using the hook
   `useTranslation` from `react-18next`. This hook export a `t` function that
   can be used like this `t('marketing.title.start')`. `_marketing+/index.tsx`
   contains an exemple.
8. Inside a loader or action function you can use your instance of RemixI18Next
   to get your translation like this :
   `const t = await i18next.getFixedT(request)`. Then you can use the `t`
   function like this `t('auth.invalidUsernameOrPassword')`. An example is
   available in `_auth+/login.tsx`.

Update 22/09/2023 :

- I added the [i18next-parser](https://github.com/i18next/i18next-parser)
  library which parse your code and add it the common message. You can configure
  it inside the `i18next-parser.config.js` file

- inside `app/utils/user-validation.ts`, i've added an example of how we can
  translate zod schema. I'm sending the translation key for each zod
  requirements. The translation key is then translated in the ErrorList
  component. I'm using comments inside `user-validation`, to help
  i18next-parser. See https://github.com/i18next/i18next-parser#caveats

- For meta translation, i'm doing the translation inside the loader and using
  that value in the MetaFunction. Example in the files : `forgot-passwords.tsx`,
  `login.tsx`...

Update 2/01/2024

- The remix-stack is updated to the version of the 2/01/2024

- Add of `i18next.d.ts` for namespace types

Update 16/02/2024

- In `entry.client.tsx`, for development environement i added a custom header so
  that the translations are not cached into the browser. cf
  [#5](https://github.com/rperon/epic-stack-with-i18n/issues/5)

Update 23/02/2024

- Epic stack is updated to the 22/02/2024 version with support for vite.
- The only modification necessary for making i18n-remix work with remix is to
  add this in the `vite.config.ts` file :

```ts
	ssr: {
		noExternal: ['remix-i18next'],
	},
```

Update 1/03/2024

- Following Remix vite 18next example by Sergio Xalambri
  https://github.com/sergiodxa/remix-vite-i18next/tree/main, i refactored the
  example.
- Updated to latest version of `remix-i18next`, we no longer need to modify the
  `vite.config.ts` file.
- Exit `i18next-fs-backend` adn `i18next-http-backend`, we are now transforming
  the json files to ts files that are managed by vite.
- This way, we can have HMR and a really nice developer UX.
- Locales are now located in `/app/locales`, `i18n` configuration is moved to
  `/app/config` and load the translations.
