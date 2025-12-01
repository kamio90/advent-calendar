# 🎄 Kalendarz Adwentowy 2024 - Luksusowa Edycja

Profesjonalny, pięknie zaprojektowany kalendarz adwentowy z 24 unikalnymi niespodziankami. Stworzony z miłością i dbałością o każdy szczegół.

![Kalendarz Adwentowy](https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200)

## ✨ Funkcjonalności

- **24 Unikalne Niespodzianki** - Każdy dzień zawiera specjalną, spersonalizowaną niespodziankę
- **Inteligentny System Dat** - Można otworzyć tylko dzisiejszy dzień lub wcześniejsze
- **Responsywny Design** - Perfekcyjnie wygląda na telefonach, tabletach i komputerach
- **Płynne Animacje** - Profesjonalne efekty 3D, hover effects, micro-interactions
- **Spadający Śnieg** - Subtelna animacja płatków śniegu w tle
- **Konfetti** - Eksplozja konfetti przy otwieraniu każdego dnia
- **Dźwięki** - Opcjonalne dźwięki dzwoneczka (można wyciszyć)
- **localStorage** - Zapamiętuje otwarte dni między sesjami
- **Progress Bar** - Pokazuje postęp otwarcia wszystkich dni
- **Statystyki** - Licznik otwartych dni i dni do Gwiazdki
- **Udostępnianie** - Przycisk do udostępnienia linku
- **Easter Egg** - Ukryta funkcja resetu (5x klik na ⚙️)

## 🎨 Design

Luksusowy, świąteczny motyw z paletą kolorów:
- Deep Red (#8B0000)
- Złoto (#FFD700)
- Śnieżna Biel (#FFFAFA)
- Ciemna Zieleń (#0B3D0B)

Fonty premium:
- **Playfair Display** - nagłówki
- **Great Vibes** - dekoracyjne akcenty
- **Montserrat** - tekst body

## 📦 Zawartość Repozytorium

```
advent-calendar/
├── index.html          # Główny plik HTML
├── styles.css          # Style CSS z animacjami
├── script.js           # Logika JavaScript
└── README.md           # Ten plik
```

## 🚀 Deployment na GitHub Pages - KROK PO KROKU

### Krok 1: Stwórz Repozytorium na GitHubie

1. Zaloguj się na [GitHub.com](https://github.com)
2. Kliknij **"+"** w prawym górnym rogu
3. Wybierz **"New repository"**
4. Wypełnij dane:
   - **Repository name**: `advent-calendar` (możesz użyć innej nazwy)
   - **Description**: "Wyjątkowy Kalendarz Adwentowy 2024 🎄"
   - Zaznacz **Public** (ważne dla GitHub Pages)
   - **NIE** zaznaczaj "Add a README file" (już masz README)
5. Kliknij **"Create repository"**

### Krok 2: Przygotuj Pliki Lokalnie

Jeśli jeszcze nie masz repozytorium Git w tym folderze:

```bash
cd /Users/kamio90/Developer/personal/advent-calendar
git init
git add .
git commit -m "🎄 Dodaj piękny kalendarz adwentowy"
```

### Krok 3: Połącz z GitHubem i Wypchnij Kod

Użyj komend, które GitHub pokazał Ci po stworzeniu repo (zastąp `TWOJA-NAZWA-UŻYTKOWNIKA`):

```bash
git remote add origin https://github.com/TWOJA-NAZWA-UŻYTKOWNIKA/advent-calendar.git
git branch -M main
git push -u origin main
```

### Krok 4: Włącz GitHub Pages

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij zakładkę **"Settings"** (u góry)
3. W menu po lewej znajdź **"Pages"** (w sekcji "Code and automation")
4. W sekcji **"Source"** wybierz:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Kliknij **"Save"**
6. Poczekaj 1-2 minuty

### Krok 5: Uzyskaj Link

Po chwili w górnej części strony Pages pojawi się komunikat:

```
Your site is live at https://TWOJA-NAZWA-UŻYTKOWNIKA.github.io/advent-calendar/
```

**To jest Twój link do udostępnienia!** 🎉

## 🔗 Przykładowy Link

Jeśli Twoja nazwa użytkownika GitHub to `jan-kowalski`, a repozytorium nazwałeś `advent-calendar`, Twój link będzie:

```
https://jan-kowalski.github.io/advent-calendar/
```

## 📱 Testowanie

Po wdrożeniu przetestuj:

1. ✅ Otwórz link na telefonie
2. ✅ Otwórz link na komputerze
3. ✅ Sprawdź czy dzisiejszy dzień jest dostępny
4. ✅ Sprawdź czy przyszłe dni są zablokowane
5. ✅ Otwórz dzień i sprawdź animację konfetti
6. ✅ Przetestuj przycisk udostępniania
7. ✅ Sprawdź czy dźwięki działają (kliknij 🔔)

## 🎁 Lista Niespodzianek

Kalendarz zawiera 24 spersonalizowane niespodzianki:

1. ☕ Śniadanie królowej
2. 🍿 Wieczór filmowy DELUXE
3. 💆 Masaż 60 minut
4. 🍫 Czekolady PREMIUM
5. ✨ Dzień wolny od WSZYSTKIEGO
6. ⭐ Złote życzenie
7. 👨‍🍳 Szef Kuchni do usług
8. 🛍️ DZIEŃ ZAKUPÓW - 5000 zł
9. 🎲 Game Night Premium
10. 🚶 Jesienny/zimowy spacer
11. 🧖 Home SPA - 2 godziny
12. 🎭 Koncert/Event/Show
13. 😴 Leniwa niedziela
14. 🍽️ Kolacja w najlepszej restauracji
15. 🏨 TRIP 3 dni - Twój wybór
16. 🚫 Veto Card
17. 📸 Profesjonalna sesja zdjęciowa
18. 🛠️ Kupon "Ja to załatwię"
19. 🎁 Paczka od Świętego Mikołaja
20. 🔥 Wieczór przy kominku
21. 💝 3x Masaż w 2025
22. 🎵 Twoja osobista playlist
23. 💌 List miłosny + album wspomnień
24. 🎄 GŁÓWNA NIESPODZIANKA GWIAZDKOWA

## 🛠️ Personalizacja

### Zmiana Treści Niespodzianek

Edytuj plik `script.js`, znajdź sekcję `GIFT_CONTENT` (linia ~15):

```javascript
const GIFT_CONTENT = {
    1: {
        icon: '☕',
        title: 'Twój Tytuł',
        description: 'Twój opis niespodzianki...'
    },
    // ... pozostałe dni
};
```

### Zmiana Kolorów

Edytuj plik `styles.css`, znajdź sekcję `:root` (linia ~7):

```css
:root {
    --deep-red: #8B0000;
    --gold: #FFD700;
    /* ... pozostałe kolory */
}
```

### Zmiana Roku/Dat

Edytuj plik `script.js`, znajdź sekcję `CALENDAR_CONFIG` (linia ~7):

```javascript
const CALENDAR_CONFIG = {
    year: 2024,
    month: 11, // December (0-indexed)
    totalDays: 24,
    // ...
};
```

## 🐛 Troubleshooting

### Strona się nie ładuje
- Poczekaj 2-3 minuty po włączeniu GitHub Pages
- Sprawdź czy repozytorium jest **Public**
- Wyczyść cache przeglądarki (Ctrl+F5)

### Animacje nie działają
- Sprawdź konsolę przeglądarki (F12)
- Upewnij się że wszystkie pliki są w tym samym folderze
- Sprawdź czy przeglądarka obsługuje modern JavaScript

### Dźwięki nie działają
- Kliknij ikonę 🔔 aby włączyć dźwięki
- Przeglądarka może blokować autoplay - wymaga interakcji użytkownika

### Reset kalendarza (do testów)
- Kliknij 5 razy na ikonę ⚙️ na dole strony
- Lub otwórz Konsolę (F12) i wpisz: `localStorage.removeItem('adventCalendarOpenedDays'); location.reload();`

## 📝 Aktualizacja Treści

Jeśli chcesz zmienić coś w kalendarzu po wdrożeniu:

```bash
# 1. Edytuj pliki lokalnie
# 2. Commituj zmiany
git add .
git commit -m "✨ Aktualizacja treści"

# 3. Wypchnij na GitHub
git push

# 4. GitHub Pages automatycznie zaktualizuje stronę (1-2 minuty)
```

## 💡 Wskazówki

- **Testowanie przed 1 grudnia**: Użyj funkcji reset (5x klik na ⚙️) aby przetestować różne dni
- **Mobile First**: Kalendarz wygląda świetnie na telefonach - idealne do codziennego otwierania
- **Udostępnianie**: Użyj przycisku "Udostępnij" aby skopiować link
- **Prywatność**: Jeśli chcesz aby kalendarz był prywatny, możesz hostować go lokalnie lub na prywatnym serwerze

## 🎉 Gratulacje!

Twój piękny kalendarz adwentowy jest gotowy! Niech każdy dzień przynosi radość i uśmiech! 🎄✨

---

**Stworzony z ❤️ w 2024**

## 📄 Licencja

Ten projekt jest dostępny do użytku osobistego. Możesz go modyfikować i dostosowywać do własnych potrzeb.

## 🌟 Autor

Jeśli masz pytania lub problemy, utwórz Issue w tym repozytorium.