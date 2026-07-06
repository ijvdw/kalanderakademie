# Projek Checklist - Kalander Webwerf

## Fase 1: Beplanning & Domein

| # | Item | Status | Notas |
|---|---|---|---|
| 1.1 | Kliënt keur voorstel goed | ⬜ | Maak veranderinge op VOORSTEL.md |
| 1.2 | Kliënt verskaf inhoud (teks, foto's, logo) | ⬜ | Sien VOORSTEL.md afdeling 4 |
| 1.3 | Finaliseer webwerf struktuur | ⬜ | Indien kliënt ander bladsye wil he |
| 1.4 | **Koop domein** (GoDaddy) | ⬜ | Ek doen namens hulle - gebruik hul e-pos vir rekening |
| 1.5 | Stel Cloudflare rekening op (gratis DNS + SSL) | ⬜ | |

## Fase 2: Ontwikkelingsomgewing

| # | Item | Status | Notas |
|---|---|---|---|
| 2.1 | Node.js + npm gereed | ⬜ | |
| 2.2 | Angular CLI installeer | ⬜ | `npm i -g @angular/cli` |
| 2.3 | Skep nuwe Angular projek | ⬜ | `ng new kalander --routing --style=scss` |
| 2.4 | Stel Git repo op + koppel aan GitHub | ⬜ | |
| 2.5 | Aktiveer GitHub Pages in repo instellings | ⬜ | Source: GitHub Actions |
| 2.6 | Stel GitHub Actions workflow op vir deploy | ⬜ | Bou + deploy na gh-pages |
| 2.7 | Kies UI biblioteek (opsioneel) | ⬜ | Angular Material / Bootstrap / Tailwind |

## Fase 3: Webwerf Bou

| # | Item | Status | Notas |
|---|---|---|---|
| 3.1 | Stel routing op | ⬜ | |
| 3.2 | Bou navigasie balk (header) | ⬜ | |
| 3.3 | Bou voet (footer) | ⬜ | Kontak + sosiale media skakels |
| 3.4 | Bou **Tuisblad** | ⬜ | |
| 3.5 | Bou **Oor Ons** bladsy | ⬜ | Wat is Kalander, span |
| 3.6 | Bou **Dienste** bladsy | ⬜ | Akademies, Houtwerk, Musiek, Vakansie |
| 3.7 | Bou **Skedule / Fooie** bladsy | ⬜ | Ure, pryse |
| 3.8 | Bou **Kontak** bladsy | ⬜ | Vorm + Maps + sosiaal |
| 3.9 | Responsiewe ontwerp (mobiel + tablet + rekenaar) | ⬜ | |
| 3.10 | SEO basics (meta tags, titels) | ⬜ | |

## Fase 4: Funksionaliteit

| # | Item | Status | Notas |
|---|---|---|---|
| 4.1 | Kontakvorm integreer | ⬜ | FormSubmit (gratis, onbeperk) |
| 4.2 | Google Maps op kontak bladsy | ⬜ | |
| 4.3 | Sosiale media skakels (Facebook, WhatsApp) | ⬜ | Include WhatsApp link |
| 4.4 | 404 bladsy | ⬜ | |

## Fase 5: Deploy & Launch

| # | Item | Status | Notas |
|---|---|---|---|
| 5.1 | Stel base-href korrek op | ⬜ | |
| 5.2 | Toets plaaslik (`ng serve`) | ⬜ | |
| 5.3 | Bou vir produksie (`ng build --configuration production`) | ⬜ | |
| 5.4 | Deploy na GitHub Pages (GitHub Actions) | ⬜ | |
| 5.5 | Koppel eie domein aan GitHub Pages | ⬜ | CNAME lêer |
| 5.6 | Stel Cloudflare DNS op (CNAME na gebruikers.github.io) | ⬜ | |
| 5.7 | Stel Cloudflare SSL op (Full) | ⬜ | |
| 5.8 | Stel e-pos forwarding op (info@ -> Gmail) | ⬜ | Cloudflare Email Routing |
| 5.9 | Toets regstreekse webwerf deeglik | ⬜ | Alle bladsye, vorm, skakels |
| 5.10 | Wys kliënt vir terugvoer | ⬜ | |
| 5.11 | Finale veranderinge implementeer | ⬜ | |
| 5.12 | **LANSEER** | ⬜ | |

## Fase 6: Na-Launch

| # | Item | Status | Notas |
|---|---|---|---|
| 6.1 | Stel Google Analytics op | ⬜ | |
| 6.2 | Stel Google Search Console op | ⬜ | |
| 6.3 | Dien sitemap.xml in by Google | ⬜ | |
| 6.4 | Oordrag instruksies aan kliënt | ⬜ | Hoe om veranderinge te versoek |

---

## Koste Opsomming

| Item | Koste | Verskaffer |
|---|---|---|
| Domein (.co.za of .org.za) | ~R150 - R250/jaar | GoDaddy |
| Hosting (GitHub Pages) | Gratis | GitHub |
| SSL | Gratis | Cloudflare |
| Kontakvorm | Gratis (onbeperk) | FormSubmit |
| DNS | Gratis | Cloudflare |
| E-pos forwarding | Gratis | Cloudflare |
| **TOTAAL** | **~R150 - R250/jaar** | |

---

## Notas

- Ek koop die domein namens die kliënt met GoDaddy (gebruik kliënt se e-pos)
- Geen blog/nuus op die webwerf nie - Facebook word vir alle nuus en gebeure gebruik
- Ek sal self foto's kry om die webwerf aan die gang te kry
- Kliënt kan later met voorstelle vir veranderinge kom
- Ontwikkeling werk intussen op `https://[gebruiker].github.io/kalander/`

## Kleurpalet

| Kleur | Gebruik | Heks |
|---|---|---|
| Sagte Roomwit | Hoofagtergrond | #FDFBF7 |
| Diep Koffiebruin | Teks & Opskrifte | #211D1A |
| Saliegroen | Navigasie & Footer | #5B6E46 |
| Warm Oker/Karamel | Knoppies & Aksente | #D4A373 |
