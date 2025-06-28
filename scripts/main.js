document.addEventListener('DOMContentLoaded', () => {
    const giftCardList = document.getElementById('gift-card-list');
    const currentGiftCardDisplay = document.getElementById('current-gift-card');
    const spinSpiralButton = document.getElementById('spin-spiral-button');

    let giftCards = [];

    if (giftCardList && currentGiftCardDisplay && spinSpiralButton) {
        // Extract gift card content from the hidden list
        // Convert NodeList to Array to use array methods if needed, though direct iteration is fine
        const listItems = giftCardList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            giftCards.push(listItems[i].innerHTML); // Store the HTML content of each li
        }

        const displayRandomGiftCard = () => {
            if (giftCards.length > 0) {
                const randomIndex = Math.floor(Math.random() * giftCards.length);
                currentGiftCardDisplay.innerHTML = giftCards[randomIndex];
            } else {
                currentGiftCardDisplay.innerHTML = "<p>No gift cards available to display.</p>";
            }
        };

        // Event listener for the button
        spinSpiralButton.addEventListener('click', displayRandomGiftCard);

        // Display an initial random gift card on page load
        if (giftCards.length > 0) {
            displayRandomGiftCard();
        } else {
            // Fallback if the gift card list was somehow empty or not found
            // This message is slightly different from the one inside displayRandomGiftCard
            // to help differentiate if an issue occurs before the first spin.
            currentGiftCardDisplay.innerHTML = "<p>Welcome! Spin the spiral to get started.</p>";
        }

    } else {
        console.error('Gift card cycler elements not found. Check IDs in HTML and JS.');
        // Optionally, display an error message to the user in a fallback way
        if (currentGiftCardDisplay) {
            currentGiftCardDisplay.innerHTML = "<p>Oops! Something went wrong with loading the gifts. Please try refreshing.</p>";
        }
    }

    // --- Daily Mantra Generator ---
    const mantraDisplayArea = document.getElementById('mantra-display-area');
    const mantras = [
        "Today, I embrace the small steps. 🌱",
        "My journey is unique and valuable. ✨",
        "Progress, not perfection. 🌀",
        "I am resilient and can navigate any setback. 🧗",
        "Curiosity is my compass today. 🗺️",
        "I choose a mindset of growth. 🧠",
        "Every effort counts, no matter how small. 💧",
        "I am building something meaningful. 💞",
        "I forgive myself and move forward. 🔁",
        "This is poetry under pressure. 🎭"
    ];

    if (mantraDisplayArea) {
        const displayRandomMantra = () => {
            if (mantras.length > 0) {
                const randomIndex = Math.floor(Math.random() * mantras.length);
                // Just set textContent for security, though these mantras are safe
                mantraDisplayArea.textContent = mantras[randomIndex];
            } else {
                mantraDisplayArea.textContent = "May your day be filled with positive intention.";
            }
        };

        // Display a mantra on page load
        displayRandomMantra();
    } else {
        console.error('Mantra display area not found. Check ID in HTML and JS.');
    }

    // --- Local Progress Notes ---
    const progressNotesInput = document.getElementById('progress-notes-input');
    const saveNotesButton = document.getElementById('save-notes-button');
    const downloadNotesButton = document.getElementById('download-notes-button');
    const notesStatus = document.getElementById('notes-status');
    const localStorageKey = 'giftSpiralUserNotes';

    if (progressNotesInput && saveNotesButton && downloadNotesButton && notesStatus) {
        // Load notes from localStorage on page load
        const savedNotes = localStorage.getItem(localStorageKey);
        if (savedNotes) {
            progressNotesInput.value = savedNotes;
            notesStatus.textContent = 'Previously saved notes loaded. ✨';
            setTimeout(() => { notesStatus.textContent = ''; }, 3000);
        } else {
            notesStatus.textContent = 'Type your notes above. They save in your browser.';
             setTimeout(() => { notesStatus.textContent = ''; }, 5000);
        }

        // Save notes to localStorage
        saveNotesButton.addEventListener('click', () => {
            localStorage.setItem(localStorageKey, progressNotesInput.value);
            notesStatus.textContent = 'Notes saved locally! 📝';
            setTimeout(() => { notesStatus.textContent = ''; }, 3000);
        });

        // Download notes as a .txt file
        downloadNotesButton.addEventListener('click', () => {
            const notesContent = progressNotesInput.value;
            if (!notesContent.trim()) {
                notesStatus.textContent = 'Nothing to download. Write some notes first!';
                setTimeout(() => { notesStatus.textContent = ''; }, 3000);
                return;
            }
            const blob = new Blob([notesContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'gift-spiral-notes.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url); // Clean up
            notesStatus.textContent = 'Notes downloaded! 📄';
            setTimeout(() => { notesStatus.textContent = ''; }, 3000);
        });

    } else {
        console.error('Progress notes elements not found. Check IDs in HTML and JS.');
        if(notesStatus) notesStatus.textContent = "Error loading notes feature.";
    }
});
