# [Epic Stack](https://github.com/epicweb-dev/epic-stack) with [i18next](https://https://www.i18next.com) and [remix-i18next](https://github.com/sergiodxa/remix-i18next)

<img width="1368" alt="Screenshot epic stack in french" src="https://github.com/rperon/epic-stack-with-i18n/assets/692098/0cdca101-1a67-4d53-89a9-d6287564372f">

This demonstrates how to use [i18next](https://https://www.i18next.com/) and
[remix-i18next](https://github.com/sergiodxa/remix-i18next) with the
[Epic Stack](https://github.com/epicweb-dev/epic-stack). It includes a dropdown
menu to switch from one language to an another.

This exemple is based on the usage of a cookie to save the user language but
there is other way to do so, like saving the language in the user object or
using the url.

To check out the changes, check [the git commit history](https://github.com/rperon/epic-stack-with-i18n/commit/378d9b713450a885783dc017432842fe019f39cf). The important parts
are:

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
