# Netflix Clone Project

A fully responsive, pixel-perfect clone of the Netflix homepage. This project replicates the core visual design and interactive elements of the Netflix user interface, including a cinematic video billboard, content sliders, responsive navigation, and interactive modals.

## 🚀 Features

### Core Functionality
*   **Video Billboard:** A cinematic hero section featuring an autoplaying background video (muted by default) that loops seamlessly.
*   **Content Sliders:** Horizontal scrolling lists for movie/show categories ("Because you watched...", "Trending Now") with smooth scrolling behavior.
*   **Video Player:** A custom full-screen video player overlay that launches when the "Play" button is clicked.
*   **More Info Modal:** A detailed popup modal displaying show metadata (match score, age rating, duration), synopsis, cast/genre details, and an interactive episodes list.

### Interactivity & UI
*   **Dynamic Header:** The navigation bar changes background color from transparent to solid black upon scrolling.
*   **Search Bar:** An expandable search input that reveals itself with a smooth animation when the search icon is clicked.
*   **Profile Dropdown:** An interactive user profile menu with a dropdown list that closes when clicking outside.
*   **Notifications:** A functional bell icon that toggles notifications on/off with visual feedback and alerts.
*   **Navigation Highlighting:** The navigation menu features intelligent hovering logic:
    *   The current page (Home) is bold/active by default.
    *   Hovering over other links temporarily highlights them while dimming the active one.
    *   Mouse leaving the menu restores the original selection.

### Responsiveness
*   **Device Adaptation:** The layout adapts seamlessly to Desktop, Tablet (Portrait/Landscape), and Mobile Phones.
*   **Mobile Optimizations:**
    *   Navigation links hide behind a simplified header on small screens.
    *   Slider images resize proportionally to fit narrower viewports.
    *   Touch-friendly scrolling for content sliders (hiding navigation arrows on touch devices).
    *   Font sizes and padding adjust dynamically to ensure legibility.

## 🛠️ Technology Stack

*   **HTML5:** Semantic markup structure.
*   **CSS3:** Flexbox, CSS Grid, Media Queries, Transitions, and Animations.
*   **JavaScript (ES6):** DOM manipulation, event listeners, and interactive logic.
*   **FontAwesome:** Iconography for UI elements.
*   **Google Fonts / System Fonts:** Typography mimicking the Netflix aesthetic (Helvetica Neue).

## 📂 Project Structure

```text
netflix-clone/
│
├── index.html       # Main HTML structure
├── style.css        # Styling, layout, and responsiveness
├── script.js        # Logic for interactivity (modals, sliders, scroll effects)
├── README.md        # Project documentation
└── media/           # Assets folder (videos, images, logos)
    ├── Netflix_2015_logo.svg
    ├── TearsOfSteel.mp4
    ├── fifty.jpg
    ├── blue.avif
    └── ... (other poster images)
