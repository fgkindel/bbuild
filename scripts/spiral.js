// scripts/spiral.js

/**
 * Creates and renders a spiral of gift items.
 * @param {HTMLElement} container - The HTML element to render the spiral into.
 * @param {Array<string>} giftsData - An array of HTML strings, each representing a gift's content.
 * @param {Function} onGiftSelect - Callback function when a gift is selected.
 */
export function createSpiral(container, giftsData, onGiftSelect) {
    if (!container || !giftsData || giftsData.length === 0) {
        console.error('Spiral container or gifts data is missing or empty.');
        if (container) container.innerHTML = '<p>Could not load gifts for the spiral.</p>';
        return;
    }

    container.innerHTML = ''; // Clear any existing content (e.g., old button or placeholder)
    container.style.position = 'relative'; // Needed for absolute positioning of children
    container.style.width = '100%';
    // container.style.height = '400px'; // Removed fixed height, will be controlled by CSS or content
    // container.style.border = '1px solid #00ffff'; // Temporary border, can be removed or kept for debug
    container.style.margin = '20px auto';


    const numGifts = giftsData.length;
    // Ensure container has dimensions before calculating center.
    // offsetWidth should be fine, but offsetHeight might be 0 if not set by CSS.
    // For centerY, if height is not explicitly set, it might default to a small value
    // or the min-height from CSS.
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight || 350; // Fallback to min-height if offsetHeight is 0

    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Spiral parameters - Adjusted for better density and appearance
    const a = 10; // Start radius - slightly larger to avoid too much crowding at center
    const b = 8;  // Distance between spiral arms - smaller for tighter packing
    const angleStep = 0.6; // Radians: adjusted for balance between density and separation
    let currentAngle = Math.PI / 2; // Start angle (e.g., top of spiral)

    let maxR = 0; // To keep track of maximum radius for potential dynamic height adjustment

    giftsData.forEach((giftHTML, index) => {
        const giftElement = document.createElement('div');
        giftElement.classList.add('spiral-gift-item');

        // Attempt to extract title from <strong> tag, fallback to index
        let itemText = `${index + 1}`;
        try {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = giftHTML;
            const strongTag = tempDiv.querySelector('strong');
            if (strongTag && strongTag.textContent) {
                // Take first few words of the strong tag's content
                const words = strongTag.textContent.trim().split(/\s+/);
                itemText = words.slice(0, 3).join(" ");
                if (words.length > 3) itemText += "...";
            }
        } catch (e) {
            console.warn("Could not parse gift HTML for title", e);
        }
        giftElement.innerHTML = `<span>${itemText}</span>`;
        giftElement.title = giftHTML.replace(/<[^>]+>/g, ''); // Full text as tooltip (stripped HTML)
        giftElement.dataset.giftIndex = index; // Store index for later retrieval of full content
        giftElement.setAttribute('role', 'button');
        giftElement.setAttribute('tabindex', '0');


        // Archimedean spiral formula: r = a + b * theta
        // Convert to Cartesian coordinates: x = r * cos(theta), y = r * sin(theta)
        const r = a + b * currentAngle;
        const x = centerX + r * Math.cos(currentAngle);
        const y = centerY + r * Math.sin(currentAngle);

        giftElement.style.position = 'absolute';
        giftElement.style.left = `${x}px`;
        giftElement.style.top = `${y}px`;
        giftElement.style.transform = 'translate(-50%, -50%)'; // Center the element on the calculated point

        const selectThisGift = () => {
            if (onGiftSelect) {
                onGiftSelect(giftsData[index], giftElement, index);
            }
        };

        giftElement.addEventListener('click', selectThisGift);
        giftElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent space from scrolling page
                selectThisGift();
            }
        });

        container.appendChild(giftElement);

        currentAngle += angleStep; // Increment angle for the next item
    });

    // Initial message if needed, or handled by parent component
    // if (giftsData.length > 0 && onGiftSelect) {
    //     // Optionally auto-select the first gift or display a general message
    // }
}
