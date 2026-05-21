# Nimbus Landing Page

Marketing landing page za fiktivni cloud monitoring SaaS.
Ciljna publika: backend developeri i DevOps inženjeri u startup-ima.

## Tech stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Bez external UI library — plain Tailwind only

## Komande
- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint provera

## Struktura
- Komponente u `components/` folderu u root projekta
- Jedna komponenta po fajlu, PascalCase nazivi
- Stranice i layout u `app/`

## Konvencije
- Default export za sve komponente
- Tailwind klase inline, bez `@apply`
- Bez `any` u TypeScript-u
- Semantički HTML
- Bez komentara osim za netrivijalnu logiku

## Dizajn sistem
- Paleta: neutral-50 do neutral-900
- Accent: neutral-900 na svetloj pozadini
- Dugmad: rounded-full
- Kartice: rounded-2xl
- Headinzi: tracking-tight
- Container: px-6 mobile, max-w-6xl mx-auto desktop

## Responsive
- Mobile-first
- Breakpoint md: i naviše za desktop
- Test na 375px, 768px, 1280px

## Workflow
- Za veće izmene: prvo predloži plan, čekaj potvrdu
- Posle svake izmene pokreni npm run build
- Ne diraj fajlove van zadatka

## Šta NE diraj
- `app/layout.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `package.json`
