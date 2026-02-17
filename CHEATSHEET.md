# 🎯 Ściągawka - Najważniejsze Komendy

## 🚀 PIERWSZE WDROŻENIE

```bash
# 1. Push do GitHub (MUSISZ TO ZROBIĆ TERAZ!)
cd /Users/kamio90/Developer/personal/advent-calendar
git push -u origin main

# 2. Potem idź na GitHub i włącz Pages:
# https://github.com/kamio90/advent-calendar/settings/pages
# Branch: main → Save

# 3. Twój link będzie:
# https://kamio90.github.io/advent-calendar/
```

---

## 🔄 AKTUALIZACJA TREŚCI

```bash
cd /Users/kamio90/Developer/personal/advent-calendar

# Edytuj pliki, potem:
git add .
git commit -m "✨ Opis zmian"
git push

# Strona zaktualizuje się automatycznie (1-2 min)
```

---

## 🧪 TESTOWANIE LOKALNIE

```bash
# Otwórz w przeglądarce:
open index.html

# Albo:
open /Users/kamio90/Developer/personal/advent-calendar/index.html
```

---

## 🎁 RESET KALENDARZA (do testów)

### Metoda 1: Kliknij 5x na ⚙️ na stronie

### Metoda 2: Konsola przeglądarki (F12)
```javascript
// Wyczyść wszystkie otwarte dni:
localStorage.removeItem('adventCalendarOpenedDays');
location.reload();

// Ustaw konkretne dni jako otwarte:
localStorage.setItem('adventCalendarOpenedDays', JSON.stringify([1, 5, 10]));
location.reload();
```

---

## 📝 EDYCJA TREŚCI NIESPODZIANEK

```javascript
// Plik: script.js (linia ~15)

const GIFT_CONTENT = {
    1: {
        icon: '☕',              // Emoji
        title: 'Twój Tytuł',    // Nagłówek
        description: 'Opis...'  // Pełny opis
    },
    // ... więcej dni
};
```

Po edycji:
```bash
git add script.js
git commit -m "✨ Zmiana treści dnia X"
git push
```

---

## 🎨 ZMIANA KOLORÓW

```css
/* Plik: styles.css (linia ~7) */

:root {
    --deep-red: #8B0000;      /* Twój kolor */
    --gold: #FFD700;           /* Twój kolor */
    --snow-white: #FFFAFA;     /* Twój kolor */
    /* ... */
}
```

Po edycji → `git add . && git commit -m "🎨 Zmiana kolorów" && git push`

---

## 🔗 TWOJE LINKI

**GitHub Repo:**
https://github.com/kamio90/advent-calendar

**Live Strona (po włączeniu Pages):**
https://kamio90.github.io/advent-calendar/

**Settings → Pages:**
https://github.com/kamio90/advent-calendar/settings/pages

---

## 📱 SZYBKI TEST

```bash
# Otwórz lokalnie:
open index.html

# Otwórz live (po deployment):
open https://kamio90.github.io/advent-calendar/
```

---

## 🐛 ROZWIĄZYWANIE PROBLEMÓW

### Strona nie działa (404)
```bash
# Sprawdź czy push przeszedł:
git status
git log

# Sprawdź czy GitHub Pages jest włączony:
open https://github.com/kamio90/advent-calendar/settings/pages
```

### Git push nie działa
```bash
# Użyj Personal Access Token:
# 1. Idź: https://github.com/settings/tokens
# 2. Generate new token (classic)
# 3. Zaznacz 'repo'
# 4. Użyj tokena jako hasła przy push
```

### Chcę zmienić remote URL
```bash
# Z HTTPS na SSH:
git remote set-url origin git@github.com:kamio90/advent-calendar.git

# Sprawdź:
git remote -v
```

---

## 📦 BACKUP

```bash
# Sklonuj w inne miejsce:
cd ~/Desktop
git clone https://github.com/kamio90/advent-calendar.git advent-calendar-backup
```

---

## 🔒 PERSONAL ACCESS TOKEN

Jeśli `git push` wymaga hasła:

1. Idź: https://github.com/settings/tokens
2. **Generate new token** → **Classic**
3. Zaznacz: `repo` (full control)
4. **Generate token**
5. **SKOPIUJ TOKEN** (nie zobaczysz ponownie!)
6. Użyj jako hasła w terminalu

---

## 💡 PRZYDATNE KOMENDY GIT

```bash
# Status
git status

# Historia commitów
git log --oneline

# Cofnij zmiany (przed commit)
git restore script.js

# Zobacz różnice
git diff

# Obecny branch
git branch

# Remote
git remote -v
```

---

## 🎯 CHECKLIST PRZED WYSŁANIEM LINKU

- [ ] `git push` wykonany ✅
- [ ] GitHub Pages włączony ✅
- [ ] Strona działa: https://kamio90.github.io/advent-calendar/ ✅
- [ ] Test na telefonie ✅
- [ ] Test na komputerze ✅
- [ ] Dzisiejszy dzień dostępny ✅
- [ ] Przyszłe dni zablokowane ✅
- [ ] Animacje działają (śnieg, konfetti) ✅
- [ ] Dźwięki działają (🔔) ✅
- [ ] Modal otwiera się ✅
- [ ] Treść niespodzianek OK ✅

---

## 📞 HELP!

**README.md** - Pełna dokumentacja
**DEPLOYMENT.md** - Szczegółowe wdrożenie
**QUICKSTART.md** - Szybki start
**FINAL_STEPS.md** - Co teraz zrobić
**MESSAGE_TEMPLATE.md** - Gotowe wiadomości

---

## 🎄 QUICK WINS

```bash
# Wszystko w jednej linii:
git add . && git commit -m "✨ Update" && git push

# Otwórz projekt w VSCode:
code .

# Otwórz folder w Finder:
open .

# Otwórz GitHub repo:
open https://github.com/kamio90/advent-calendar
```

---

**Gotowe! Trzymaj tę ściągawkę pod ręką! 🎯**