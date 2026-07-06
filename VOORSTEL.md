# Webwerf Voorstel - Kalander

> **Datum:** Julie 2026
> **Voorberei vir:** Kalander
> **Voorberei deur:** Izak

---

## 1. Besigheidsinligting (vanaf Facebook)

| Item | Besonderheid |
|---|---|
| **Naam** | Kalander (ook: Kalander Akademie leersentrum) |
| **Kategorie** | Naskool versorging, Tutor/Onderwys, Kind ontwikkeling |
| **Adres** | 104 Meade Street, George, 6529 |
| **Foon** | +27 79 454 8155 |
| **WhatsApp** | +27 79 454 8155 |
| **E-pos** | info.kalander@gmail.com |
| **Dienste** | Huiswerkhulp, Akademiese hulp (Gr 1-12), Houtwerk klasse, Musiekterapie, Vakansieprogramme |
| **Ure** | Maandag - Vrydag (presiese ure onbekend) |
| **Span** | Hoogs gekwalifiseerd en ervare, individuele aandag in klein groepies |

> ⬆️ **Vir kliënt:** Bevestig asb. dat bostaande korrek is, of maak enige veranderinge hier.

---

## 2. Tegniese Oplossing (Izak se afdeling)

| Item | Besluit |
|---|---|
| **Raamwerk** | Angular (staties) |
| **Hosting** | GitHub Pages (gratis) |
| **Domein** | kalanderakademie.co.za (of kalanderakademie.org.za) - **enigste koste** |
| **SSL** | Gratis via Cloudflare |
| **E-pos** | Gratis forwarding via Cloudflare (bv. info@kalanderakademie.co.za) |
| **Kontakvorm** | [FormSubmit](https://formsubmit.co/) (gratis, onbeperk) - stuur eenvoudig vorm na hul URL |
| **Kode Stoor** | Git (GitHub) |
| **CI/CD** | GitHub Actions (outomatiese bou en deploy) |

### Kleurpalet (gebaseer op logo)

| Kleur | Gebruik | Heks |
|---|---|---|
| Sagte Roomwit | Hoofagtergrond (60%) | #FDFBF7 |
| Diep Koffiebruin | Teks & Opskrifte (30%) | #211D1A |
| Saliegroen | Navigasie & Footer (30%) | #5B6E46 |
| Warm Oker/Karamel | Knoppies & Aksente (10%) | #D4A373 |

### Koste Opsomming

| Item | Koste |
|---|---|
| Domein (via GoDaddy) | ~R100/jaar |
| Hosting, SSL, DNS, E-pos | Gratis |
| **Totaal per jaar** | **Slegs domeinkoste** |

---

## 3. Voorgestelde Webwerf Struktuur

```
Kalander Webwerf
├── Tuisblad
│   ├── Welkom / Hero
│   ├── Kort oorsig van dienste
│   ├── Uitgeligte foto's
│   └── Kontak besonderhede
│
├── Oor Ons
│   ├── Wat is Kalander?
│   ├── Ons span / kwalifikasies
│   └── Fotogallery
│
├── Dienste
│   ├── Akademiese hulp (Gr 1-12)
│   ├── Houtwerk klasse
│   ├── Musiekterapie
│   └── Vakansieprogram
│
├── Skedule / Fooie
│   ├── Daaglikse ure
│   ├── Vakansietye
│   └── Fooie struktuur
│
├── Kontak
│   ├── Kontakvorm
│   ├── Adres + Google Maps
│   ├── Foon / WhatsApp / E-pos
│   └── Sosiale media skakels
│
└── Voet (onder aan elke bladsy)
    ├── Kopiereg
    ├── Vinnige skakels
    └── Sosiale media
```

> Geen "Nuus/Blog" afdeling nie - sosiale media (Facebook) word hiervoor gebruik. (My voorstel)

---

## 4. Inhoud wat benodig word

- ☐ **Logo** (hoë resolusie, PNG/SVG)
- ☐ **Kort beskrywing** van Kalander (2-3 paragrawe)
- ☐ **Span inligting** - name, rolle, kwalifikasies, foto's
- ☐ **Dienste besonderhede** - wat word per diens aangebied?
- ☐ **Ure** - presiese daaglikse tye
- ☐ **Fooie** - pryse indien beskikbaar
- ☐ **Foto's** - van die perseel, klasse, houtwerk, terapië, kinders (met toestemming)
- ☐ **Sosiale media** links (Facebook, Instagram, ens.)

> Ek sal self soveel moontlik foto's kry om die webwerf aan die gang te kry. Die kliënt kan later voorstel vir veranderinge.

---

## 5. Algemene Stappe

1. Kliënt keur voorstel goed / maak veranderinge
2. Kliënt verskaf inhoud (foto's, teks)
3. Koop domein (GoDaddy - Izak doen namens hulle met hul e-pos)
4. Izak bou Angular projek + stel GitHub Pages op
5. Izak bou die webwerf (alle bladsye)
6. Izak koppel kontakvorm
7. Izak deploy na GitHub Pages + koppel eie domein
8. Izak stel Cloudflare DNS + SSL op
9. Izak toets alles deeglik
10. Wys aan kliënt vir finale terugvoer
11. Lanseer

---

## 6. Statiese Blog / Nuus - Voorstel

Aangesien die webwerf **staties** is (geen backend nie):

**Aanbevole opsie:** Gebruik die bestaande **Facebook-blad** vir alle nuus en gebeure.

- Facebook is klaar in gebruik en die kliënt weet hoe om dit te gebruik
- Plaas eenvoudig 'n skakel na die Facebook-blad op die webwerf
- Geen onderhoud, sekuriteit of tegniese (programmering) kennis nodig
- Kan Facebook feed insluit op die webwerf (via widget) indien verkies

**Alternatief** (indien sy self op webwerf wil post):
- 'n password-protected, eenvoudige CMS soos **Decap CMS** wat aan GitHub koppel
- Sy kan dan poste skryf soos in 'n Wordpress agterstuk
- Maar dit is meer kompleks (Izak het dit nog nooit geïmplementeer nie, maar sal probeer indien so verkies) en verg steeds 'n bietjie opleiding

**My voorstel:** Haal die blog afdeling uit die webwerf en skakel eerder na Facebook (posts intrek).

---

## 7. Volgende Stappe (Opsommend)

1. Kliënt lees hierdie voorstel deur en dui aan wat verander moet word
2. Ek koop die domein (GoDaddy)
3. Ek begin bou - ek sal self fotos kry om die webwerf aanlyn te kry
4. Kliënt kyk en maak voorstelle vir veranderinge
5. Finale afteken en lanseer
