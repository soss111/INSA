# INSA — gümnaasiumi inseneeria valikkursused

Kohalik staatiline veebileht kursuste materjalide jaoks (esitlus + õpilase töövihik).

> **Märkus:** See projekt on ainult kohalikuks eelvaateks. Midagi ei ole üles laaditud ega juurutatud aadressile www.insa.ee / insa.ee.

## Kohalik eelvaade

1. Ava kaust `C:\Users\LauriSoosaar\insa-ee`
2. Topeltklõpsa failil `index.html` **või** käivita lihtne server:

```powershell
cd C:\Users\LauriSoosaar\insa-ee
python -m http.server 8080
```

Seejärel ava brauseris `http://localhost:8080`.

## Struktuur

| Fail / kaust | Sisu |
|--------------|------|
| `index.html` | Avaleht, tutvustus, vaated, rahastaja + jalus |
| `css/styles.css` | Stiilid |
| `js/app.js` | Navigatsioon (moodul → kursus → materjalid) |
| `data/courses.js` | Moodulid, kursused, Drive’i ID-d, meeskond |
| `assets/logos/` | Rahastaja logod (EL kaksiklogo, Inseneriakadeemia) |

**Navigatsioon:** Avaleht → Moodulid → Kursus → Esitlus + töövihik (terve kursuse materjal, mitte tunni kaupa).

## Google Drive lingid

Redigeeri faili `data/courses.js`. Igal kursusel on:

- `presentationId` — PowerPoint-faili ID
- `workbookId` — õpilase töövihiku (.doc) ID

### Kuidas ID leida

1. Jaga fail Drive’is: **Igaüks, kellel on link → Vaataja**
2. URL-ist: `https://drive.google.com/file/d/FILE_ID/view` → kopeeri `FILE_ID`
3. Asenda `PLACEHOLDER_PRESENTATION_ID` / `PLACEHOLDER_WORKBOOK_ID`

Kasutatavad mustrid:

- Eelvaade: `https://drive.google.com/file/d/FILE_ID/preview`
- Allalaadimine: `https://drive.google.com/uc?export=download&id=FILE_ID`
- Kaust (vajadusel): `https://drive.google.com/embeddedfolderview?id=FOLDER_ID#list`

## Meeskond

Lauri Soosaar, Rasmus Kits, Liis Proos, Holger Bremen, Kristina Ruder.

## Rahastaja ja jalus

Saidil on jaluses rahastaja-riba (mitte hero) tekstiga *Projekt on toetatud Inseneeriakadeemia MATIK koolide projektist*, EL–Eesti kaksiklogo ning Inseneriakadeemia logo. Allpool: `© 2026 INSA · Arendaja: Yrgel`.

### Logofailid (`assets/logos/`)

| Fail | Allikas / märkus |
|------|------------------|
| `eu-kaasrahastanud-kaksiklogo.svg` | EL embleem + Eesti purjekujuline lipp + tekst „Kaasrahastanud Euroopa Liit“. SVG on ametlike värvidega kohalik rekonstruktsioon — **asenda** RTK ametliku JPG/AI paketiga, kui saad: [Logod ja sümboolika (RTK)](https://rtk.ee/toetused-taotlemine/kiirelt-katte/logod-ja-sumboolika) → Ühtekuuluvuspoliitika fondide logod → *Kaasrahastanud Euroopa Liit* (horisontaalne, värviline). |
| `inseneriakadeemia-logo.svg` | Ametlik wordmark saidilt [inseneriakadeemia.harno.ee](https://inseneriakadeemia.harno.ee/) (oranž märk + tekst). |

Logosid ära ümber värvi; jäta ümber turvaala. Kui vahetad faili, hoia sama failinimi või uuenda `index.html` `src`.
