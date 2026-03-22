# Mo's Media

Een cinematische video website gebouwd met HTML, CSS en JavaScript — geïnspireerd op NOWNESS.

## 🚀 Deployen op GitHub Pages

### Stap 1 — Maak een GitHub account
Ga naar [github.com](https://github.com) en registreer gratis.

### Stap 2 — Maak een nieuwe repository
1. Klik op de groene knop **"New"** (linksboven)
2. Geef de repository een naam, bijv. `mosmedia`
3. Zet hem op **Public**
4. Klik **"Create repository"**

### Stap 3 — Upload je bestanden
1. Klik op **"uploading an existing file"**
2. Sleep alle bestanden uit deze map naar de uploadpagina:
   - `index.html`
   - `style.css`
   - `main.js`
   - `video.html`
   - `video.css`
   - `video.js`
3. Schrijf een commit message, bijv. `first commit`
4. Klik **"Commit changes"**

### Stap 4 — Zet GitHub Pages aan
1. Ga naar **Settings** (tabblad bovenaan je repository)
2. Scroll naar **"Pages"** in het linkermenu
3. Onder **"Branch"** → kies `main` → klik **Save**
4. Wacht 1-2 minuten

### Stap 5 — Je site is live! 🎉
Je site is bereikbaar op:
```
https://JOUW-GEBRUIKERSNAAM.github.io/mosmedia/
```

---

## 📁 Bestandsstructuur

```
mosmedia/
├── index.html    — Homepage
├── style.css     — Gedeelde styling
├── main.js       — Homepage JavaScript
├── video.html    — Video detailpagina
├── video.css     — Video pagina styling
└── video.js      — Video pagina JavaScript
```

## 🎬 Videos

De website bevat de volgende YouTube videos:
- `k4cwKIw6Rtw` — Mustafah Abdulaziz: Water
- `RiySkOdQESU` — Mo's Media Film
- `W1g76TmHDBg` — Mo's Media Film
- `pEf3VdtrotA` — Mo's Media Film

Nieuwe video toevoegen: voeg een kaart toe in `index.html` met `href="video.html?v=YOUTUBE_ID"`.

## 🛠 Lokaal testen

```bash
python -m http.server 8080
```
Ga dan naar `http://localhost:8080`
