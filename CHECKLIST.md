# Projek Checklist - Kalander Webwerf

Status: ✅ Live at https://ijvdw.github.io/kalanderakademie/

## Fase 1: Beplanning & Domein

| # | Item | Status | Notas |
|---|---|---|---|
| 1.1 | Kliënt keur voorstel goed | ⬜ | Maak veranderinge op VOORSTEL.md |
| 1.2 | Kliënt verskaf inhoud (teks, foto's, logo) | ✅ | Inhoud gelaai |
| 1.3 | Finaliseer webwerf struktuur | ✅ | 5 bladsye: Home, About, Services, Schedule, Contact |
| 1.4 | **Koop domein** (GoDaddy) | ⬜ | Wag vir kliënt goedkeuring van live preview |
| 1.5 | Stel Cloudflare rekening op (gratis DNS + SSL) | ⬜ | Nadat domein gekoop is |

## Fase 2: Ontwikkelingsomgewing

| # | Item | Status | Notas |
|---|---|---|---|
| 2.1 | Node.js + npm gereed | ✅ | |
| 2.2 | Angular CLI installeer | ✅ | |
| 2.3 | Skep nuwe Angular projek | ✅ | `ng new kalander --routing --style=scss` |
| 2.4 | Stel Git repo op + koppel aan GitHub | ✅ | github.com/ijvdw/kalanderakademie |
| 2.5 | Aktiveer GitHub Pages in repo instellings | ✅ | Branch: gh-pages, root |
| 2.6 | Stel GitHub Actions workflow op vir deploy | ✅ | JamesIves/gh-pages-deploy@v4 |
| 2.7 | Kies UI biblioteek (opsioneel) | ✅ | Eie CSS (geen biblioteek) |

## Fase 3: Webwerf Bou

| # | Item | Status | Notas |
|---|---|---|---|
| 3.1 | Stel routing op | ✅ | |
| 3.2 | Bou navigasie balk (header) | ✅ | Sticky, hamburger op mobiel |
| 3.3 | Bou voet (footer) | ✅ | 4 kolomme |
| 3.4 | Bou **Tuisblad** | ✅ | Hero + logo, dienste-opsomming, oor-ons voorskou |
| 3.5 | Bou **Oor Ons** bladsy | ✅ | |
| 3.6 | Bou **Dienste** bladsy | ✅ | Akademies, Houtwerk, Musiek, Vakansie |
| 3.7 | Bou **Skedule / Fooie** bladsy | ✅ | |
| 3.8 | Bou **Kontak** bladsy | ✅ | Vorm (FormSubmit) + Google Maps |
| 3.9 | Responsiewe ontwerp (mobiel + tablet + rekenaar) | ✅ | |
| 3.10 | SEO basics (meta tags, titels) | ✅ | Per-blad titels, OG meta, robots, sitemap |

## Fase 4: Funksionaliteit

| # | Item | Status | Notas |
|---|---|---|---|
| 4.1 | Kontakvorm integreer | ✅ | FormSubmit, stuur na info.kalander@gmail.com |
| 4.2 | Google Maps op kontak bladsy | ✅ | |
| 4.3 | Sosiale media skakels (Facebook, WhatsApp) | ✅ | Footer + kontak bladsy |
| 4.4 | 404 bladsy | ✅ | Eie 404 komponent |

## Fase 5: Deploy & Launch

| # | Item | Status | Notas |
|---|---|---|---|
| 5.1 | Stel base-href korrek op | ✅ | `/kalanderakademie/` |
| 5.2 | Toets plaaslik (`ng serve`) | ✅ | |
| 5.3 | Bou vir produksie | ✅ | |
| 5.4 | Deploy na GitHub Pages | ✅ | GitHub Actions werk |
| 5.5 | Koppel eie domein aan GitHub Pages | ⬜ | Wag vir kliënt |
| 5.6 | Stel Cloudflare DNS op | ⬜ | Nadat domein gekoop is |
| 5.7 | Stel Cloudflare SSL op (Full) | ⬜ | |
| 5.8 | Stel e-pos forwarding op (info@ -> Gmail) | ⬜ | Cloudflare Email Routing |
| 5.9 | Toets regstreekse webwerf deeglik | ✅ | Alle bladsye werk |
| 5.10 | Wys kliënt vir terugvoer | ⬜ | |
| 5.11 | Finale veranderinge implementeer | ⬜ | |
| 5.12 | **LANSEER** | ⬜ | |

## Fase 6: Na-Launch

| # | Item | Status | Notas |
|---|---|---|---|
| 6.1 | Stel Google Analytics op | ⬜ | |
| 6.2 | Stel Google Search Console op | ⬜ | |
| 6.3 | Dien sitemap.xml in by Google | ⬜ | |
| 6.4 | Oordrag instruksies aan kliënt | ⬜ | |

## Optimalisasies (klaar)

| # | Item | Beskrywing |
|---|---|---|
| O.1 | Beeldoptimalisasie | PNGs gekompresseer (~2MB → ~300-550KB), WebP weergawes geskep (~23-194KB) |
| O.2 | WebP + `<picture>` | Alle beelde gebruik WebP met PNG fallback |
| O.3 | Lazy loading | Beelde onder die vou gebruik `loading="lazy"` |
| O.4 | 404 bladsy | Eie 404 komponent in plaas van redirect |
| O.5 | SEO per bladsy | Elke bladsy stel unieke title |
| O.6 | Open Graph meta | OG tags in index.html |
| O.7 | Sitemap | `sitemap.xml` in public/ |
| O.8 | Robots.txt | In public/ |
| O.9 | Hero agtergrond | Gebruik WebP |

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
- Ontwikkeling werk op `https://ijvdw.github.io/kalanderakademie/`

## Kleurpalet

| Kleur | Gebruik | Heks |
|---|---|---|
| Sagte Roomwit | Hoofagtergrond | #FDFBF7 |
| Diep Koffiebruin | Teks & Opskrifte | #211D1A |
| Saliegroen | Navigasie & Footer | #5B6E46 |
| Warm Oker/Karamel | Knoppies & Aksente | #D4A373 |
