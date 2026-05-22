<!--
  Čemu služi AGENTS.md?

  AGENTS.md je standard koji čitaju RAZNI AI coding agenti (Claude Code,
  Cursor, GitHub Copilot, Codex, itd.). Sve što ovde napišeš primenjuje se
  bez obzira na to koji alat koristiš.

  Razlika u odnosu na CLAUDE.md:
  - CLAUDE.md — pravila specifična za Claude Code (workflow, ton, lint/build
    koraci, "ne diraj" lista). Druge alate to ne zanima.
  - AGENTS.md — univerzalna pravila o samom projektu (verzija framework-a,
    breaking changes, ključne stvari koje svaki agent mora znati).

  Pravilo: ako je nešto vezano za Claude Code kao alat → CLAUDE.md.
            Ako je nešto vezano za projekat sam → AGENTS.md.

  Blok između BEGIN/END markera ispod automatski održava Next.js CLI —
  ne diraj ga ručno. Sve svoje dopune piši ISPOD END markera.
-->

# Nimbus — project notes for AI agents

Ovaj projekat je demo Next.js 16 landing page za fiktivni cloud monitoring SaaS (Nimbus). Mali je namerno — koristi se kao primer na FON Open IT predavanju o Claude Code-u.

- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind v4
- Sav UI copy je na engleskom; pravila i komentari mogu biti na srpskom
- Detaljne konvencije (paleta, radijusi, workflow) opisane su u `CLAUDE.md`

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
