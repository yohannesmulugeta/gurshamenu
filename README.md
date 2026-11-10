# ADMAKI Menu

The restaurant menu service website for ADMAKI Digital. Public site: https://menu.admakidigital.com/ . The working menu and account application stays at https://app.admakidigital.com/ . Existing hash-based QR links redirect to the application while preserving the path and query.

## Development
`npm ci` then `npm run dev`. `npm run build` creates `dist/`. Set `CF_PAGES=1` for a domain-root Cloudflare build; the default `/gurshamenu/` base preserves the existing GitHub Pages URL. Repository and deployment names remain stable.

## Identity
Connected AD artwork, Manrope typography, navy #0B1220, blue #2563EB and warm white #FAFAF8. Logos and share preview are in public/brand; local web fonts include OFL licenses. Restaurant names and data live in the separate application.
