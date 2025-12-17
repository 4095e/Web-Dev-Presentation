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
This project was built iteratively using an LLM (Large Language Model). Below is the chronological list of prompts used to refine the application from a basic concept to a polished product.

Phase 1: Foundation & Core Layout
Prompt 1:

"create a seperate css, javascript and html file with the following requirements: Home page should autoplay the video. Play button should play the video in video player. Clicking in More info should pop-up the modal. Create full functional Netflix Homepage. Create a category wise slider (Minimum 2 sliders). Full Header and Footer (Ditto). Pixel perfect Output. Fully functional. Responsive."

Phase 2: Refinement & Visuals
Prompt 2:

"add a video in the homepage that autoplays as shown in the image, the play button that plays the button in the video player is also missing. also add the the fully functional netflix homepage , also add the category wise slider. make it exactly like the images shown."

Prompt 3:

"make it exactly like the images attached before... Home page should autoplay the video... Responsive but keep placeholder media"

Phase 3: Custom Assets & Advanced Logic
Prompt 4:

"Utilise the media as aforementioned /dont change the media in the current file. add the following changes:

add media queries to adapt usage on mobile devices.
when menu options are hovered upon they are highlighted. If not hovered upon the last selected menu is highlighted.
The search option when selected should open a search bar in similar colour to the profile. When hovered upon, elevate.
When the profile is hovered upon elevate.
when the bell icon is pressed, change colour and a pop up appears...
the drop down menu beside the user should have a drop down list...
The sliders help to scroll the media horizontally, make it elegant and simple."
Phase 4: UX Improvements
Prompt 5:

"add left and right arrows on the horizontal scroll blocks"

Prompt 6:

"add media queries to make it usable for tablets/phones/ other devices. also ensure the last selected menu is bolded, unless the user is hovering over other menu options also add comments on each line of code"

Phase 5: Design Corrections & Responsiveness
Prompt 7:

"keep everything the same just change the image size in the slider to the previous size"

Prompt 8:

"keep everything the same just add media queries for all suitable components ensuring it is suitable for phones."

Prompt 9 (Final Polish):

"when the application is in mobile/tablet view due to media query slider photos arent properly visble... improve media queries also add a favicon"

💿 How to Run
Ensure you have a folder named media in the same directory as the code files.
Populate the media folder with the assets referenced in the HTML (or update the src paths in index.html to point to your own images/videos).
Open index.html in any modern web browser.
