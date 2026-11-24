/* ==========================================
   SAILLUUU - COMPLETE WEBSITE JAVASCRIPT
   PHASES 1 TO 8
========================================== */


/* ==========================================
   MAIN SETTINGS
========================================== */

// BIRTHDAY DATE
// Change this date temporarily to test the countdown.

const BIRTHDAY_DATE = new Date(
    "2026-11-27T00:00:00+05:30"
);

const SECRET_PASSWORD = "mylovenanna2427";

let websiteUnlocked = false;

let countdownInterval = null;


/* ==========================================
   SCREEN NAVIGATION
========================================== */

const allScreens = [

    "welcomeScreen",
    "countdownSection",
    "passwordSection",
    "letterScreen",
    "memoriesScreen",
    "reasonsScreen",
    "flowerGardenScreen",
    "timelineScreen",
    "giftScreen",
    "voiceScreen",
    "celebrationScreen",
    "finalScreen"

];

function showScreen(screenId) {

    allScreens.forEach(id => {

        const screen = document.getElementById(id);

        if (screen) {
            screen.classList.add("hidden");
        }

    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {

        selectedScreen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* ==========================================
   BACKGROUND STARS
========================================== */

const starsContainer = document.getElementById("stars");

if (starsContainer) {

    for (let i = 0; i < 50; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.textContent = "✦";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.fontSize =
            Math.random() * 15 + 8 + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        starsContainer.appendChild(star);

    }

}


/* ==========================================
   SPARKLES
========================================== */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.textContent = "✦";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        Math.random() * 15 + 10 + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);

}

setInterval(createSparkle, 500);


/* ==========================================
   PHASE 1 - WELCOME
========================================== */

const startButton =
    document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener("click", function () {

        showScreen("countdownSection");

        startCountdown();

    });

}


/* ==========================================
   PHASE 2 - BIRTHDAY COUNTDOWN
========================================== */

function startCountdown() {

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    updateCountdown();

    countdownInterval = setInterval(
        updateCountdown,
        1000
    );

}


function updateCountdown() {

    if (websiteUnlocked) {
        clearInterval(countdownInterval);
        return;
    }

    const now = new Date();

    const difference =
        BIRTHDAY_DATE.getTime() - now.getTime();

    if (difference <= 0) {

        clearInterval(countdownInterval);

        showScreen("passwordSection");

        return;

    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


/* ==========================================
   PASSWORD UNLOCK
========================================== */

const passwordForm =
    document.getElementById("passwordForm");

if (passwordForm) {

    passwordForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const enteredPassword =
            document.getElementById("passwordInput").value;

        const error =
            document.getElementById("passwordError");

        if (enteredPassword === SECRET_PASSWORD) {

            websiteUnlocked = true;

            error.textContent = "";

            showScreen("letterScreen");

        } else {

            error.textContent =
                "Oops! That's not the correct password. Try again! 💙";

        }

    });

}


/* ==========================================
   PHASE 3 - LOVE LETTER
========================================== */

const loveLetter =

`My Dearest Saiillluuuu 💙,

I don't know where to begin because there are so many things I want to tell you.

You came into my life and made so many ordinary moments feel extraordinary.

Your smile, your laughter, your care and every little thing about you make my days more beautiful.

I feel lucky to have you beside me. Every journey, every conversation and every memory with you means so much to me.

I  know what the future with  you, but I know one thing: I want to keep creating beautiful memories with you.

Happy Birthday, my Saiillluuuu!

You are my favourite person, my happiness and my special one.

With all my love,
Nannaa💙`;


const openLetterButton =
    document.getElementById("openLetterButton");

if (openLetterButton) {

    openLetterButton.addEventListener("click", function () {

        document.getElementById("envelopeStage")
            .classList.add("hidden");

        document.getElementById("letterReadingArea")
            .classList.remove("hidden");

        typeLetter();

    });

}


function typeLetter() {

    const letterElement =
        document.getElementById("typedLetter");

    let index = 0;

    letterElement.textContent = "";

    const typing = setInterval(function () {

        letterElement.textContent += loveLetter.charAt(index);

        index++;

        if (index >= loveLetter.length) {

            clearInterval(typing);

            document.getElementById("continueButton")
                .classList.remove("hidden");

        }

    }, 35);

}


const continueButton =
    document.getElementById("continueButton");

if (continueButton) {

    continueButton.addEventListener("click", function () {

        showScreen("memoriesScreen");

    });

}


/* ==========================================
   PHASE 4 - PHOTO GALLERY
========================================== */

const galleryPhotos =
    document.querySelectorAll(".gallery-photo");

let currentPhotoIndex = 0;

const photoViewer =
    document.getElementById("photoViewer");


function openPhoto(index) {

    currentPhotoIndex = index;

    const photo = galleryPhotos[index];

    document.getElementById("viewerImage").src =
        photo.src;

    document.getElementById("viewerCaption").textContent =
        "A beautiful memory 💙";

    photoViewer.classList.remove("hidden");

}


galleryPhotos.forEach((photo, index) => {

    photo.addEventListener("click", function () {

        openPhoto(index);

    });

});


function changePhoto(direction) {

    currentPhotoIndex += direction;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = galleryPhotos.length - 1;
    }

    if (currentPhotoIndex >= galleryPhotos.length) {
        currentPhotoIndex = 0;
    }

    openPhoto(currentPhotoIndex);

}


document.getElementById("previousPhotoButton")
    .addEventListener("click", () => changePhoto(-1));

document.getElementById("nextPhotoButton")
    .addEventListener("click", () => changePhoto(1));


document.getElementById("closeViewerButton")
    .addEventListener("click", function () {

        photoViewer.classList.add("hidden");

    });


document.addEventListener("keydown", function (event) {

    if (photoViewer.classList.contains("hidden")) return;

    if (event.key === "Escape") {

        photoViewer.classList.add("hidden");

    }

    if (event.key === "ArrowRight") {
        changePhoto(1);
    }

    if (event.key === "ArrowLeft") {
        changePhoto(-1);
    }

});


document.getElementById("galleryContinueButton")
    .addEventListener("click", function () {

        showScreen("reasonsScreen");

    });


/* ==========================================
   PHASE 5 - 30 REASONS
========================================== */

const reasons = [

    "Your beautiful eyes.",

    "The way you laugh makes me happy.",

    "You make every moment special.",

    "Your caring nature.",

    "Your beautiful smile makes my day.",

    "The way you understand me.",

    "Your innocent expressions.",

    "The way you talk to me.",

    "You make me feel special.",

    "Your adorable little habits.",

    "The happiness you bring into my life.",

    "Your patience with me.",

    "The way you support me in everything.",

    "Your kindness towards others.",

    "Your beautiful heart.",

    "The way you make me smile.",

    "Your lovely voice.",

    "Every conversation with you.",

    "The memories we create together.",

    "Your strength and determination.",

    "The way you make me feel loved.",

    "Your cute little anger.",

    "The way you care about me.",

    "Your dreams and ambitions.",

    "You make my world brighter.",

    "The comfort I feel with you.",

    "Your unique personality.",

    "Every little thing about you.",

    "You are simply irreplaceable.",

    "Because you are MY SAIILLLUUUU! ❤️"

];


const reasonsGrid =
    document.getElementById("reasonsGrid");

let discoveredReasons = 0;


reasons.forEach((reason, index) => {

    const card = document.createElement("div");

    card.className = "reason-card";

    card.innerHTML = `

        <div class="reason-card-inner">

            <div class="reason-front">
                💙 ${index + 1}
            </div>

            <div class="reason-back">
                ${reason}
            </div>

        </div>

    `;

    card.addEventListener("click", function () {

        if (card.classList.contains("flipped")) {
            return;
        }

        card.classList.add("flipped");

        discoveredReasons++;

        updateReasonProgress();

    });

    reasonsGrid.appendChild(card);

});


function updateReasonProgress() {

    document.getElementById("reasonCounter").textContent =

        `${discoveredReasons} / 30 Reasons Discovered`;

    const percentage =
        (discoveredReasons / reasons.length) * 100;

    document.getElementById("reasonProgressBar")
        .style.width = percentage + "%";


    if (discoveredReasons === reasons.length) {

        document.getElementById("reasonsComplete")
            .classList.remove("hidden");

    }

}


document.getElementById("flowerGardenButton")
    .addEventListener("click", function () {

        showScreen("flowerGardenScreen");

    });


/* ==========================================
   PHASE 6 - FLOWER GARDEN
========================================== */

const flowerMessages = [

    "You make my world more beautiful. 💙",

    "Your smile is my favourite sunshine. ☀️",

    "I am lucky to have you in my life. 🦋",

    "You will always have a special place in my heart. 💙",

    "No matter what, I will keep choosing you. ✨",

    "You are my favourite person and my favourite feeling. ☁️"

];


let bloomedFlowers = [];


const flowers =
    document.querySelectorAll(".garden-flower");


flowers.forEach((flower, index) => {

    flower.addEventListener("click", function () {

        if (bloomedFlowers.includes(index)) {
            return;
        }

        bloomedFlowers.push(index);

        flower.classList.add("bloomed");

        const message =
            document.getElementById("flowerMessage");

        message.textContent = flowerMessages[index];

        message.classList.remove("hidden");

        createSparkle();

        if (bloomedFlowers.length === flowers.length) {

            document.getElementById("gardenComplete")
                .classList.remove("hidden");

        }

    });

});


document.getElementById("timelineButton")
    .addEventListener("click", function () {

        showScreen("timelineScreen");

        displayRelationshipTimeline();

    });


/* ==========================================
   PHASE 7 - OUR LOVE STORY TIMELINE
========================================== */

const relationshipMemories = [

    {
        date: "2026-06-05",

        title: "Our First Meeting 💙",

        description:
            "June 5th, 2026. What a wonderful day it was! " +
            "Our first movie together, then lunch, and finally " +
            "a little bike ride. My very first ride with you. " +
            "A day that will always stay in my heart.",

        image: "assets/images/memory1.jpeg"
    },

    {
        date: "2026-06-07",

        title: "The Day We Chose Each Other ❤️",

        description:
            "June 7th, 2026. The day we proposed to each other. " +
            "The day our feelings became a beautiful beginning " +
            "of our journey together.",

        image: "assets/images/memory2.jpeg"
    },

    {
        date: "2026-06-19",

        title: "Our First Drive to Cherala 🌊",

        description:
            "Our first drive together to Cherala. " +
            "A beautiful journey filled with happiness, " +
            "togetherness and unforgettable memories.",

        image: "assets/images/memory3.jpeg"
    },

    {
        date: "2026-07-25",

        title: "A Day in Mangalagiri ✨",

        description:
            "July 25th, 2026. Another beautiful day " +
            "spent together in Mangalagiri. " +
            "Every moment with you becomes special.",

        image: "assets/images/memory4.jpeg"
    },

    {
        date: "2026-08-26",

        title: "Another Mangalagiri Memory 🦋",

        description:
            "August 26th, 2026. Another trip, " +
            "another beautiful memory and another " +
            "reason to smile whenever I think about us.",

        image: "assets/images/memory5.jpeg"
    },

    {
        date: "2026-09-21",

        title: "Back to Mangalagiri 💕",

        description:
            "September 21st, 2026. Back to Mangalagiri " +
            "once again. It is not just about the place, " +
            "it is about the person beside me.",

        image: "assets/images/memory6.jpeg"
    },

    {
        date: "2026-10-21",

        title: "Our Guntur Day 🌸",

        description:
            "October 21st, 2026. A lovely day together " +
            "in Guntur. Another little chapter in " +
            "our beautiful story.",

        image: "assets/images/memory7.jpeg"
    },

    {
        date: "2026-10-24",

        title: "Our Bapatla Trip 🌅",

        description:
            "October 24th, 2026. Our beautiful trip " +
            "to Bapatla. Another journey, another " +
            "memory and another day I will always cherish.",

        image: "assets/images/memory8.jpeg"
    }

];


// CALCULATE DAYS AGO

function getTimeAgo(dateString) {

    const memoryDate =
        new Date(dateString + "T00:00:00");

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const difference =
        today.getTime() - memoryDate.getTime();

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (days === 0) {

        return "Today is our special memory! 💙";

    }

    if (days === 1) {

        return "1 day ago 💕";

    }

    if (days > 1) {

        return days + " days ago 💙";

    }

    return "A beautiful memory waiting to happen ✨";

}


// FORMAT DATES

function formatMemoryDate(dateString) {

    const date =
        new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-IN", {

        day: "numeric",

        month: "long",

        year: "numeric"

    });

}


// DISPLAY TIMELINE

function displayRelationshipTimeline() {

    const timeline =
        document.getElementById("relationshipTimeline");

    if (!timeline) return;

    timeline.innerHTML = "";

    relationshipMemories.forEach((memory, index) => {

        const item =
            document.createElement("div");

        item.className = "timeline-item";

        item.style.animationDelay =
            `${index * 0.2}s`;

        item.innerHTML = `

            <div class="timeline-dot"></div>

            <div class="timeline-card">

                <div class="timeline-date">
                    📅 ${formatMemoryDate(memory.date)}
                </div>

                <h2>${memory.title}</h2>

                <img
                    src="${memory.image}"
                    alt="${memory.title}"
                    onerror="this.style.display='none'"
                >

                <p class="timeline-description">
                    ${memory.description}
                </p>

                <div class="timeline-ago">
                    ${getTimeAgo(memory.date)}
                </div>

            </div>

        `;

        timeline.appendChild(item);

    });

}


// TIMELINE SECRET MESSAGE AND GIFT BUTTON

const secretMessageButton =
    document.getElementById("secretMessageButton");

const secretMessage =
    document.getElementById("timelineSecretMessage");

const giftBoxButton =
    document.getElementById("giftBoxButton");


if (secretMessageButton) {

    secretMessageButton.addEventListener("click", function () {

        secretMessage.classList.toggle("hidden");

        if (!secretMessage.classList.contains("hidden")) {

            secretMessageButton.textContent =
                "My Heart Is Yours 💙";

            giftBoxButton.classList.remove("hidden");

        } else {

            secretMessageButton.textContent =
                "Open My Heart 💌";

            giftBoxButton.classList.add("hidden");

        }

    });

}


// OPEN TIMELINE GIFT BUTTON

if (giftBoxButton) {

    giftBoxButton.addEventListener("click", function () {

        showScreen("giftScreen");

    });

}


// INITIALISE TIMELINE

displayRelationshipTimeline();


/* ==========================================
   PHASE 8 - SECRET GIFT SURPRISE
========================================== */

// GIFT BOX

const giftBox =
    document.getElementById("giftBox");

let giftOpened = false;


// OPEN GIFT

if (giftBox) {

    giftBox.addEventListener("click", function () {

        if (giftOpened) return;

        giftOpened = true;

        giftBox.classList.add("opened");

        document.getElementById("giftInstruction")
            .textContent =
                "A little happiness is coming your way... 💙";


        setTimeout(function () {

            document.getElementById("giftMessage")
                .classList.remove("hidden");

            document.getElementById("giftInstruction")
                .textContent =
                    "Surprise! Happy Birthday, my love! 🎂";

            startFloatingHearts();

            document.getElementById("giftMessage")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

        }, 1200);

    });

}


// FLOATING HEARTS

function startFloatingHearts() {

    const hearts = [
        "💙",
        "💕",
        "❤️",
        "💗",
        "💖"
    ];

    for (let i = 0; i < 25; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");

            heart.className = "floating-heart";

            heart.textContent =
                hearts[Math.floor(Math.random() * hearts.length)];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                Math.random() * 25 + 15 + "px";

            document.body.appendChild(heart);

            setTimeout(function () {

                heart.remove();

            }, 4000);

        }, i * 150);

    }

}


// REPLAY GIFT

const replayGiftButton =
    document.getElementById("replayGiftButton");

if (replayGiftButton) {

    replayGiftButton.addEventListener("click", function () {

        giftOpened = false;

        giftBox.classList.remove("opened");

        document.getElementById("giftMessage")
            .classList.add("hidden");

        document.getElementById("giftInstruction")
            .textContent =
                "Tap the gift box to open your surprise! 🎁";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
/* ==========================================
   PHASE 9 - PERSONAL VOICE MESSAGE
========================================== */

// OPEN VOICE MESSAGE SCREEN

const voiceMessageButton =
    document.getElementById("voiceMessageButton");

if (voiceMessageButton) {

    voiceMessageButton.addEventListener("click", function () {

        showScreen("voiceScreen");

    });

}


// AUDIO PLAYER

const birthdayVoice =
    document.getElementById("birthdayVoice");


// LISTEN AGAIN BUTTON

const replayVoiceButton =
    document.getElementById("replayVoiceButton");

if (replayVoiceButton && birthdayVoice) {

    replayVoiceButton.addEventListener("click", function () {

        birthdayVoice.currentTime = 0;

        birthdayVoice.play().catch(error => {

            console.log("Audio playback could not start:", error);

        });

    });

}


// PAUSE AUDIO WHEN LEAVING VOICE SCREEN

document.addEventListener("click", function () {

    const voiceScreen =
        document.getElementById("voiceScreen");

    if (
        voiceScreen &&
        voiceScreen.classList.contains("hidden") &&
        birthdayVoice &&
        !birthdayVoice.paused
    ) {

        birthdayVoice.pause();

    }

});
// PHASE 10 - BIRTHDAY CELEBRATION

const voiceScreen = document.getElementById("voiceScreen");
const celebrationScreen = document.getElementById("celebrationScreen");

const birthdayCake = document.getElementById("birthdayCake");
const blowCandlesButton = document.getElementById("blowCandlesButton");

const cakeInstruction = document.getElementById("cakeInstruction");
const birthdayFinalMessage = document.getElementById("birthdayFinalMessage");

const celebrationReplayButton =
    document.getElementById("celebrationReplayButton");

const confettiContainer =
    document.getElementById("confettiContainer");


// Add a button to the voice screen to reach the celebration
const voiceCard = document.querySelector(".voice-card");

if (voiceCard && !document.getElementById("finalCelebrationButton")) {

    const finalButton = document.createElement("button");

    finalButton.id = "finalCelebrationButton";
    finalButton.className = "magic-button";
    finalButton.textContent = "One Last Surprise 🎂";

    voiceCard.appendChild(finalButton);

    finalButton.addEventListener("click", function () {
        showScreen("celebrationScreen");
    });
}


// Blow out candles
if (blowCandlesButton) {

    blowCandlesButton.addEventListener("click", function () {

        const candles = birthdayCake.querySelector(".candles");

        candles.classList.add("blown-out");

        cakeInstruction.textContent = "Your wish is on its way! 💫";

        blowCandlesButton.classList.add("hidden");

        birthdayFinalMessage.classList.remove("hidden");

        launchConfetti();

    });

}


// Confetti animation
function launchConfetti() {

    confettiContainer.innerHTML = "";

    const confettiSymbols = ["🎉", "💙", "✨", "🌸", "💕", "🎊"];

    for (let i = 0; i < 70; i++) {

        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.textContent =
            confettiSymbols[
                Math.floor(Math.random() * confettiSymbols.length)
            ];

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay = Math.random() * 2 + "s";

        piece.style.fontSize =
            (Math.random() * 15 + 12) + "px";

        confettiContainer.appendChild(piece);

    }

}


// Celebrate again
if (celebrationReplayButton) {

    celebrationReplayButton.addEventListener("click", function () {

        birthdayCake.querySelector(".candles")
            .classList.remove("blown-out");

        cakeInstruction.textContent = "Make a wish, my love! 🌸";

        birthdayFinalMessage.classList.add("hidden");

        blowCandlesButton.classList.remove("hidden");

        launchConfetti();

    });

}
// PHASE 11 - FINAL PROMISE

const replayWebsiteButton =
    document.getElementById("replayWebsiteButton");

// Navigate from birthday celebration to final promise
if (celebrationScreen) {

    const finalButton = document.createElement("button");

    finalButton.id = "finalPromiseButton";
    finalButton.className = "magic-button";
    finalButton.textContent = "Read My Final Promise 💙";

    celebrationScreen.querySelector(".celebration-card")
        .appendChild(finalButton);

    finalButton.addEventListener("click", function () {

        showScreen("finalScreen");

    });

}


// Replay the entire website
if (replayWebsiteButton) {

    replayWebsiteButton.addEventListener("click", function () {

        window.location.reload();

    });

}