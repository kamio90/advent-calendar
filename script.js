/* ==========================================
   PREMIUM ADVENT CALENDAR - JAVASCRIPT
   ========================================== */

// ===== CONFIGURATION =====
const CALENDAR_CONFIG = {
    year: 2024,
    month: 11, // December (0-indexed)
    totalDays: 24,
    startDate: new Date(2024, 11, 1), // December 1, 2024
    christmasDate: new Date(2024, 11, 25), // December 25, 2024
};

// ===== GIFT CONTENT FOR EACH DAY =====
const GIFT_CONTENT = {
    1: {
        icon: '☕',
        title: 'Śniadanie królowej',
        description: 'Do łóżka: naleśniki/jajecznica/co chcesz + kawa idealnie zrobiona + świeży sok. Tylko powiedz kiedy i co chcesz, reszta na mnie!'
    },
    2: {
        icon: '🍿',
        title: 'Wieczór filmowy DELUXE',
        description: 'Ty wybierasz film, ja załatwiam: przekąski premium, wino/drinki, koce, wszystko idealne. Netflix, kino domowe czy cokolwiek chcesz!'
    },
    3: {
        icon: '💆',
        title: 'Masaż 60 minut',
        description: 'Profesjonalny masaż całego ciała, gdzie chcesz (plecy, stopy, ramiona - Ty decydujesz). Oleje zapachowe, muzyka relaksacyjna, pełen komfort.'
    },
    4: {
        icon: '🍫',
        title: 'Czekolady PREMIUM',
        description: 'Idę do najlepszego sklepu i kupuję Twoje ulubione + coś nowego do spróbowania. Belgijskie, szwajcarskie, rzemieślnicze - co dusza zapragnie!'
    },
    5: {
        icon: '✨',
        title: 'Dzień wolny od WSZYSTKIEGO',
        description: 'Zero obowiązków domowych, zero gotowania, zero sprzątania. Ja robię dosłownie wszystko. Ty tylko odpoczywasz, czytasz, oglądasz seriale, co chcesz!'
    },
    6: {
        icon: '⭐',
        title: 'Złote życzenie',
        description: 'Możesz poprosić o (prawie) wszystko. Kupon ważny przez cały 2025. Serio, pomyśl o czymś co chcesz, a ja to załatwię!'
    },
    7: {
        icon: '👨‍🍳',
        title: 'Szef Kuchni do usług',
        description: 'Wspólnie gotujemy Twoje ulubione danie, ale ja robię całą robotę - Ty tylko nadzoruj i pij wino. Możesz też siedzieć na kanapie, ja dam znać jak będzie gotowe!'
    },
    8: {
        icon: '🛍️',
        title: 'DZIEŃ ZAKUPÓW - 5000 zł',
        description: 'Serio, 5 tysięcy złotych na CO CHCESZ. Ubrania, kosmetyki, gadżety, biżuteria - Twój dzień, Twoje zasady. Idziemy razem albo dostajesz kasę i robisz shopping spree!'
    },
    9: {
        icon: '🎲',
        title: 'Game Night Premium',
        description: 'Gry planszowe + wino/whisky + ser, wędliny, oliwki - pełna deska przekąsek. Wybierasz gry, ja załatwiam resztę. Możemy zaprosić znajomych albo sami!'
    },
    10: {
        icon: '🚶',
        title: 'Jesienny/zimowy spacer',
        description: 'Długi spacer gdzie tylko chcesz (park, las, nad wodę) + gorąca czekolada w najlepszej kawiarni po. Zero pośpiechu, tylko my i rozmowy.'
    },
    11: {
        icon: '🧖',
        title: 'Home SPA - 2 godziny',
        description: 'Maska na twarz, peeling, świece zapachowe, muzyka relaksacyjna, herbata - full relaks w domu. Przygotowuję wszystko, Ty się tylko rozkoszujesz!'
    },
    12: {
        icon: '🎭',
        title: 'Koncert/Event/Show',
        description: 'Wybierz JAKIEKOLWIEK wydarzenie (teatr, koncert, stand-up, musical, opera) - ja załatwiam bilety, dojazd, wszystko. Nawet jeśli to coś drogiego!'
    },
    13: {
        icon: '😴',
        title: 'Leniwa niedziela',
        description: 'Śpisz DOKŁADNIE ile chcesz. Mogę obudzić tylko ze śniadaniem. Zero pytań, zero planów jeśli nie chcesz. Twój dzień totalnego lenistwa!'
    },
    14: {
        icon: '🍽️',
        title: 'Kolacja w najlepszej restauracji',
        description: 'Wybierasz miejsce (nawet to najdroższe w mieście), ja rezerwuję i płacę. Dress code: elegancko. Romantyczna kolacja przy świecach!'
    },
    15: {
        icon: '🏨',
        title: 'TRIP 3 dni - Twój wybór',
        description: 'Weekend w miejscu które Ty wskażesz w Polsce. Góry, morze, mazury, Kraków, Wrocław - gdzie chcesz! Hotel, atrakcje, jedzenie - pakuję się i jedziemy. (Termin ustalamy razem)'
    },
    16: {
        icon: '🚫',
        title: 'Veto Card',
        description: 'Kupon na "Nie dziś, kochanie" - uniwersalny, używasz kiedy chcesz, do czego chcesz. No questions asked. Potrzebujesz przerwy? Nie masz ochoty? Po prostu pokazujesz ten kupon!'
    },
    17: {
        icon: '📸',
        title: 'Profesjonalna sesja zdjęciowa',
        description: 'Nas dwoje, profesjonalny fotograf (albo zabawna sesja w fotobudce - Ty decydujesz). Wspomnienia na całe życie, piękne zdjęcia do ramki!'
    },
    18: {
        icon: '🛠️',
        title: 'Kupon "Ja to załatwię"',
        description: 'Cokolwiek jest do zrobienia, naprawienia, załatwienia, umówienia, zadzwonienia - mówisz słowo i ja się tym zajmuję. Ważny cały rok 2025!'
    },
    19: {
        icon: '🎁',
        title: 'Paczka od Świętego Mikołaja',
        description: 'Niespodzianka już czeka zapakowana! Otwierasz dopiero dzisiaj. Nie będę spoilerował, ale myślę że Ci się spodoba... 🎅'
    },
    20: {
        icon: '🔥',
        title: 'Wieczór przy kominku',
        description: 'Wino/coś mocniejszego, dobre jedzenie (możemy zamówić albo ja przygotuję), rozmowy do rana albo milczenie w objęciach - jak wolisz. Ciepło, przytulnie, romantycznie.'
    },
    21: {
        icon: '💝',
        title: '3x Masaż w 2025',
        description: 'Trzy kupony na godzinny masaż do wykorzystania KIEDY chcesz w przyszłym roku. Możesz użyć ich razem albo rozłożyć - Twoja decyzja!'
    },
    22: {
        icon: '🎵',
        title: 'Twoja osobista playlist',
        description: 'Stworzona specjalnie dla Ciebie - piosenki które mi Cię kojarzą, które lubisz, które są nasze, które przypominają mi o Tobie. Z opisami dlaczego każdą wybrałem!'
    },
    23: {
        icon: '💌',
        title: 'List miłosny + album wspomnień',
        description: 'Prawdziwy, odręczny list z serca + album ze wspomnieniami z 2024 - co było najlepsze, za co jestem wdzięczny, co Cię w Tobie uwielbiam, plany na 2025.'
    },
    24: {
        icon: '🎄',
        title: 'GŁÓWNA NIESPODZIANKA GWIAZDKOWA',
        description: 'To się dowiesz dzisiaj! Coś naprawdę wyjątkowego czeka na Ciebie. Najlepsza niespodzianka na koniec... ✨🎁 (Szczegóły poznasz osobiście!)'
    }
};

// ===== STATE MANAGEMENT =====
let audioEnabled = true;
let openedDays = [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeCalendar();
    setupEventListeners();
    showLoadingScreen();
});

// ===== LOADING SCREEN =====
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// ===== CALENDAR INITIALIZATION =====
function initializeCalendar() {
    loadOpenedDays();
    generateCalendarDays();
    updateStats();
    initializeSnowfall();
}

// ===== GENERATE CALENDAR DAYS =====
function generateCalendarDays() {
    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = '';

    for (let day = 1; day <= CALENDAR_CONFIG.totalDays; day++) {
        const dayCard = createDayCard(day);
        calendarGrid.appendChild(dayCard);
    }
}

// ===== CREATE DAY CARD =====
function createDayCard(day) {
    const card = document.createElement('div');
    card.className = 'day-card';

    const dayDate = new Date(CALENDAR_CONFIG.year, CALENDAR_CONFIG.month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dayDate.setHours(0, 0, 0, 0);

    const isOpened = openedDays.includes(day);
    const isAvailable = dayDate <= today;
    const isLocked = dayDate > today;

    if (isOpened) {
        card.classList.add('opened');
    } else if (isAvailable) {
        card.classList.add('available');
    } else if (isLocked) {
        card.classList.add('locked');
    }

    const content = document.createElement('div');
    content.className = 'day-content';

    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;

    const dayLabel = document.createElement('div');
    dayLabel.className = 'day-label';
    dayLabel.textContent = 'Grudnia';

    const dayIcon = document.createElement('div');
    dayIcon.className = 'day-icon';

    if (isOpened) {
        dayIcon.textContent = '✓';
    } else if (isAvailable) {
        dayIcon.textContent = '🎁';
    } else {
        dayIcon.textContent = '🔒';
    }

    const dayStatus = document.createElement('div');
    dayStatus.className = 'day-status';
    if (isOpened) {
        dayStatus.textContent = '✨';
    } else if (isAvailable) {
        dayStatus.textContent = '⭐';
    }

    content.appendChild(dayNumber);
    content.appendChild(dayLabel);
    content.appendChild(dayIcon);
    if (dayStatus.textContent) {
        content.appendChild(dayStatus);
    }

    card.appendChild(content);

    card.addEventListener('click', () => handleDayClick(day, isAvailable, isLocked, dayDate));

    return card;
}

// ===== HANDLE DAY CLICK =====
function handleDayClick(day, isAvailable, isLocked, dayDate) {
    if (isLocked) {
        showLockedModal(dayDate);
        playSound('locked');
    } else if (isAvailable) {
        openDay(day);
    }
}

// ===== OPEN DAY =====
function openDay(day) {
    if (!openedDays.includes(day)) {
        openedDays.push(day);
        saveOpenedDays();
        updateStats();
        generateCalendarDays();
        launchConfetti();
        playSound('open');
    }

    showDayModal(day);
}

// ===== SHOW DAY MODAL =====
function showDayModal(day) {
    const modal = document.getElementById('modal');
    const modalDayNumber = document.getElementById('modal-day-number');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    const gift = GIFT_CONTENT[day];

    modalDayNumber.textContent = day;
    modalTitle.textContent = `${day} Grudnia`;

    modalBody.innerHTML = `
        <div class="surprise-content">
            <div class="surprise-icon">${gift.icon}</div>
            <h3 class="surprise-title">${gift.title}</h3>
            <p class="surprise-description">${gift.description}</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== SHOW LOCKED MODAL =====
function showLockedModal(date) {
    const modal = document.getElementById('locked-modal');
    const lockedMessage = document.getElementById('locked-message');
    const lockedDate = document.getElementById('locked-date');

    const dayName = date.toLocaleDateString('pl-PL', { weekday: 'long' });
    const dateString = date.toLocaleDateString('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    lockedMessage.textContent = 'To okienko możesz otworzyć dopiero...';
    lockedDate.textContent = `${dayName}, ${dateString}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODALS =====
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== UPDATE STATISTICS =====
function updateStats() {
    const openedCount = document.getElementById('opened-count');
    const progressPercent = document.getElementById('progress-percent');
    const progressFill = document.getElementById('progress-fill');
    const daysToChristmas = document.getElementById('days-to-christmas');

    openedCount.textContent = openedDays.length;

    const percent = Math.round((openedDays.length / CALENDAR_CONFIG.totalDays) * 100);
    progressPercent.textContent = percent;
    progressFill.style.width = `${percent}%`;

    const today = new Date();
    const christmas = CALENDAR_CONFIG.christmasDate;
    const diffTime = christmas - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    daysToChristmas.textContent = diffDays > 0 ? diffDays : 0;
}

// ===== LOCAL STORAGE =====
function saveOpenedDays() {
    localStorage.setItem('adventCalendarOpenedDays', JSON.stringify(openedDays));
}

function loadOpenedDays() {
    const saved = localStorage.getItem('adventCalendarOpenedDays');
    if (saved) {
        openedDays = JSON.parse(saved);
    }
}

function resetCalendar() {
    if (confirm('Czy na pewno chcesz zresetować kalendarz? Wszystkie otwarte dni zostaną zamknięte.')) {
        openedDays = [];
        localStorage.removeItem('adventCalendarOpenedDays');
        generateCalendarDays();
        updateStats();
        alert('Kalendarz został zresetowany!');
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Modal close buttons
    document.getElementById('modal-close').addEventListener('click', () => {
        closeModal('modal');
    });

    document.getElementById('locked-modal-close').addEventListener('click', () => {
        closeModal('locked-modal');
    });

    // Click outside modal to close
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal('modal');
        }
    });

    document.getElementById('locked-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal('locked-modal');
        }
    });

    // Audio toggle
    document.getElementById('audio-toggle').addEventListener('click', toggleAudio);

    // Share button
    document.getElementById('share-btn').addEventListener('click', shareCalendar);

    // Easter egg - reset button
    let clickCount = 0;
    document.getElementById('easter-egg-trigger').addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 5) {
            resetCalendar();
            clickCount = 0;
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal('modal');
            closeModal('locked-modal');
        }
    });
}

// ===== AUDIO CONTROLS =====
function toggleAudio() {
    audioEnabled = !audioEnabled;
    const audioBtn = document.getElementById('audio-toggle');
    audioBtn.classList.toggle('muted');

    if (audioEnabled) {
        audioBtn.querySelector('.audio-icon').textContent = '🔔';
    } else {
        audioBtn.querySelector('.audio-icon').textContent = '🔕';
    }
}

function playSound(type) {
    if (!audioEnabled) return;

    const audio = document.getElementById('bell-sound');

    if (type === 'open') {
        audio.volume = 0.3;
        audio.currentTime = 0;
        audio.play().catch(() => {});
    } else if (type === 'locked') {
        audio.volume = 0.2;
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
}

// ===== SHARE FUNCTIONALITY =====
function shareCalendar() {
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'Kalendarz Adwentowy 2024 🎄',
            text: 'Zobacz mój wyjątkowy kalendarz adwentowy!',
            url: url
        }).catch(() => {});
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            const btn = document.getElementById('share-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span class="share-icon">✓</span> Skopiowano link!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        }).catch(() => {
            alert('Link do kalendarza: ' + url);
        });
    }
}

// ===== SNOWFALL EFFECT =====
function initializeSnowfall() {
    const canvas = document.getElementById('snow-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const numberOfSnowflakes = 100;

    class Snowflake {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.speed = Math.random() * 1 + 0.5;
            this.wind = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.6 + 0.4;
        }

        update() {
            this.y += this.speed;
            this.x += this.wind;

            if (this.y > canvas.height) {
                this.reset();
                this.y = -10;
            }

            if (this.x > canvas.width) {
                this.x = 0;
            } else if (this.x < 0) {
                this.x = canvas.width;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push(new Snowflake());
    }

    function animateSnow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach(snowflake => {
            snowflake.update();
            snowflake.draw();
        });

        requestAnimationFrame(animateSnow);
    }

    animateSnow();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== CONFETTI EFFECT =====
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const numberOfPieces = 150;
    const colors = ['#FFD700', '#DC143C', '#0B3D0B', '#FFFAFA', '#B22222'];

    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 10;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * -8 - 5;
            this.speedX = Math.random() * 6 - 3;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.gravity = 0.3;
        }

        update() {
            this.speedY += this.gravity;
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height + 20) {
                return false;
            }
            return true;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < numberOfPieces; i++) {
        confettiPieces.push(new ConfettiPiece());
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = confettiPieces.length - 1; i >= 0; i--) {
            const piece = confettiPieces[i];
            if (!piece.update()) {
                confettiPieces.splice(i, 1);
            } else {
                piece.draw();
            }
        }

        if (confettiPieces.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }

    animateConfetti();
}

// ===== UTILITY FUNCTIONS =====
function getCurrentDay() {
    const today = new Date();
    if (today.getMonth() === CALENDAR_CONFIG.month &&
        today.getFullYear() === CALENDAR_CONFIG.year) {
        return today.getDate();
    }
    return null;
}

// ===== CONSOLE EASTER EGG =====
console.log('%c🎄 Wesołych Świąt! 🎄', 'color: #FFD700; font-size: 24px; font-weight: bold;');
console.log('%cKalendarz Adwentowy 2024', 'color: #DC143C; font-size: 16px;');
console.log('%cStworzony z ❤️ specjalnie dla Ciebie', 'color: #0B3D0B; font-size: 14px;');
console.log('%c\nPsst... Kliknij 5 razy na ⚙️ na dole strony żeby zresetować kalendarz (tylko do testów!)', 'color: #888; font-size: 12px; font-style: italic;');