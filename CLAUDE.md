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

## Jezik
- Sav UI copy (heading-zi, paragrafi, dugmad, labele, alt tekst) MORA biti na engleskom
- Komentari u kodu i poruke meni mogu biti na srpskom

## Next.js 16
- Ovo nije Next.js iz trening podataka — ima breaking changes
- Ako nisi siguran za neki API, proveri `node_modules/next/dist/docs/` pre nego što pišeš kod

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
- Ne diraj fajlove van zadatka
- Nove rute idu kao `app/<naziv>/page.tsx` i koriste isti `<Header />` / `<Footer />` wrapper kao `app/page.tsx`
- Ako izmena utiče na navigaciju, proveri da svi linkovi u Header-u vode na postojeća odredišta (ruta ili anchor koji zaista postoji)

## Posle svake izmene (obavezno, ovim redom)
1. `npm run lint` — mora proći bez grešaka
2. `npm run build` — mora proći bez grešaka
3. Kratko (2–3 rečenice) rezimiraj šta je promenjeno i koje fajlove si dirao
4. Ako lint ili build padne, popravi uzrok pre nego što javiš da je gotovo — ne preskači korake

## Šta NE diraj
- `app/layout.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `package.json`
