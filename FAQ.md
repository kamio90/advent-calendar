# ❓ FAQ - Najczęściej Zadawane Pytania

## Dla osoby która OTRZYMAŁA kalendarz 🎁

### Jak to działa?

Kalendarz jest interaktywny! Każdego dnia (od 1 do 24 grudnia) możesz otworzyć nowe okienko z niespodzianką.

### Kiedy mogę otwierać dni?

- **1 grudnia** → możesz otworzyć dzień 1
- **2 grudnia** → możesz otworzyć dni 1 i 2
- **10 grudnia** → możesz otworzyć dni 1-10
- **24 grudnia** → możesz otworzyć wszystkie dni!

### Czy mogę podejrzeć przyszłe dni?

NIE! 😉 System blokuje przyszłe dni. Musisz poczekać!

### Co jeśli przegapię dzień?

Spokojnie! Możesz wrócić i otworzyć wcześniejsze dni w dowolnym momencie.

### Jak działa na telefonie?

Idealnie! Dodaj link do zakładek i sprawdzaj codziennie rano.

### Czy potrzebuję konta/logowania?

NIE! Po prostu kliknij link i gotowe.

### Czy to kosztuje?

Nie, to całkowicie za darmo! 🎁

### Dlaczego nie ma dźwięku?

Kliknij ikonę 🔔 w prawym dolnym rogu żeby włączyć dźwięki.

### Czy mogę udostępnić link znajomym?

Lepiej nie - to TWÓJ osobisty kalendarz z niespodziankami specjalnie dla CIEBIE! 💝

---

## Dla osoby która STWORZYŁA kalendarz 🛠️

### Jak zmienić treść niespodzianek?

Edytuj plik `script.js`, sekcja `GIFT_CONTENT` (linia ~15)

### Jak zmienić kolory?

Edytuj plik `styles.css`, sekcja `:root` (linia ~7)

### Jak zaktualizować stronę po zmianach?

```bash
git add .
git commit -m "✨ Zmiana treści"
git push
```

GitHub Pages zaktualizuje się automatycznie w 1-2 minuty.

### Jak zresetować kalendarz do testów?

**Metoda 1:** Kliknij 5x na ikonę ⚙️ na dole strony

**Metoda 2:** Konsola (F12) → wpisz:
```javascript
localStorage.removeItem('adventCalendarOpenedDays');
location.reload();
```

### Czy mogę zmienić datę rozpoczęcia?

Tak! W pliku `script.js` zmień:
```javascript
const CALENDAR_CONFIG = {
    year: 2024,
    month: 11, // 11 = grudzień (0-indexed)
    totalDays: 24,
    startDate: new Date(2024, 11, 1),
    // ...
};
```

### Jak dodać więcej dni (np. 31)?

W `script.js`:
1. Zmień `totalDays: 31`
2. Dodaj treści dla dni 25-31 w `GIFT_CONTENT`

### Jak zmienić rok na 2025?

W `script.js` zmień wszystkie `2024` na `2025` w sekcji `CALENDAR_CONFIG`

### Czy mogę użyć własnej domeny?

Tak! Zobacz `DEPLOYMENT.md` → sekcja "Custom Domain"

### Jak wyłączyć płatki śniegu?

W `script.js` zakomentuj wywołanie:
```javascript
// initializeSnowfall();  // <- dodaj // na początku
```

### Jak wyłączyć konfetti?

W `script.js` zakomentuj:
```javascript
// launchConfetti();  // <- dodaj // na początku
```

### Jak zmienić liczbę płatków śniegu?

W `script.js` znajdź:
```javascript
const numberOfSnowflakes = 100;  // <- zmień liczbę
```

### Czy mogę dodać zdjęcia do niespodzianek?

Tak! W `script.js` w sekcji `GIFT_CONTENT` możesz dodać HTML:
```javascript
description: 'Opis... <br><img src="https://twoje-zdjecie.jpg" style="max-width: 100%; margin-top: 1rem;">'
```

### Jak dodać Google Analytics?

Zobacz `DEPLOYMENT.md` → sekcja "Statystyki i Analytics"

### Jak zrobić kalendarz prywatnym?

Domyślnie jest publiczny (ktokolwiek z linkiem może zobaczyć).

**Opcje:**
1. Użyj https://www.staticrypt.com (dodaj hasło)
2. Hostuj lokalnie (otwórz `index.html` w przeglądarce)
3. Użyj private hosting (nie GitHub Pages)

### Czy mogę zmienić fonty?

Tak! W `index.html` zmień link do Google Fonts, potem w `styles.css`:
```css
:root {
    --font-display: 'TwójFont', serif;
}
```

### Jak zmienić loading screen?

Edytuj `styles.css` → sekcja `.loading-screen` i `.gift-box`

### Czy mogę dodać muzykę w tle?

Tak, ale uwaga - większość przeglądarek blokuje autoplay.

W `index.html` dodaj przed `</body>`:
```html
<audio id="bg-music" loop>
    <source src="https://link-do-muzyki.mp3" type="audio/mpeg">
</audio>
```

W `script.js`:
```javascript
document.getElementById('audio-toggle').addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
```

### Jak długo będzie działać?

GitHub Pages jest darmowy i będzie działać tak długo jak masz konto GitHub.

### Czy mogę użyć tego kalendarza w przyszłym roku?

Tak! Po prostu zmień rok w `CALENDAR_CONFIG` i zaktualizuj treści.

### Ile kosztuje hosting?

**ZERO!** GitHub Pages jest całkowicie darmowy dla public repositories.

### Czy mogę dodać więcej animacji?

Tak! CSS i JavaScript są w pełni edytowalne. Możesz dodać co tylko chcesz!

---

## Troubleshooting 🔧

### Strona nie ładuje się

1. Poczekaj 2-3 minuty po włączeniu GitHub Pages
2. Wyczyść cache: `Ctrl + F5` (Windows) / `Cmd + Shift + R` (Mac)
3. Spróbuj w trybie incognito
4. Sprawdź czy repo jest Public

### Animacje lagują

1. Zmniejsz liczbę płatków: `numberOfSnowflakes = 50`
2. Zmniejsz liczbę konfetti: `numberOfPieces = 100`
3. Wyłącz niektóre animacje

### Modal się nie otwiera

1. Otwórz konsolę (F12) i sprawdź błędy
2. Upewnij się że `script.js` jest załadowany
3. Wyczyść localStorage i odśwież

### Dni się nie zapisują

1. Sprawdź czy localStorage jest włączony w przeglądarce
2. Wyczyść cookies i spróbuj ponownie
3. Tryb incognito może blokować localStorage

### Strona wygląda źle na telefonie

1. Sprawdź czy masz najnowszą wersję kodu
2. Wyczyść cache na telefonie
3. Sprawdź w różnych przeglądarkach (Safari, Chrome)

### Git push nie działa

1. Użyj Personal Access Token zamiast hasła
2. Sprawdź połączenie internetowe
3. Zobacz: `CHEATSHEET.md` → sekcja "Git push nie działa"

---

## Performance 🚀

### Jak przyspieszyć ładowanie?

1. **Zmniejsz animacje:**
   - Mniej płatków śniegu
   - Mniej konfetti

2. **Optymalizuj obrazy** (jeśli dodajesz):
   - Użyj WebP zamiast PNG/JPG
   - Kompresuj: https://tinypng.com

3. **Usuń nieużywane fonty:**
   - W `index.html` zostaw tylko te których używasz

### Aktualna wielkość projektu:

- **HTML:** ~7 KB
- **CSS:** ~21 KB
- **JavaScript:** ~21 KB
- **RAZEM:** ~49 KB (super szybkie!)

---

## Bezpieczeństwo 🔒

### Czy kalendarz jest bezpieczny?

TAK! 100% kodu lokalnego, zero external dependencies (poza fontami).

### Czy ktoś może zmienić treść?

Nie, chyba że ma dostęp do Twojego konta GitHub.

### Czy mogę dodać hasło?

Tak, użyj: https://www.staticrypt.com

---

## Inspiracje i Rozszerzenia 💡

### Co mogę dodać?

- Zdjęcia do każdego dnia
- Linki do playlist Spotify
- Linki do YouTube (filmy)
- QR kody
- Zagadki/zadania
- Countdown timer
- Galeria zdjęć

### Inne zastosowania:

- Kalendarz urodzinowy (30 dni)
- Walentynkowy (14 dni)
- Rocznica (365 dni w roku!)
- Odliczanie do ślubu
- Wyzwanie 30-dniowe

---

## Społeczność 🌟

### Mogę pokazać znajomym kod?

Oczywiście! Możesz fork'ować repo i modyfikować dla siebie.

### Gdzie szukać pomocy?

1. Przeczytaj wszystkie README
2. Sprawdź konsole (F12)
3. Google/Stack Overflow
4. GitHub Issues

---

**Masz inne pytanie? Otwórz `DEPLOYMENT.md` lub `README.md`!**

**Wesołych Świąt! 🎄✨**