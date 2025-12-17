document.addEventListener('DOMContentLoaded', () => {
    // Ensures all DOM elements are fully loaded before running JavaScript

    // --- Header Background Scroll Effect ---
    const header = document.getElementById('header'); 
    // Selects the header element for dynamic styling

    window.addEventListener('scroll', () => {
        // Listens for page scroll events
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); 
            // Adds solid background after scrolling down
        } else {
            header.classList.remove('scrolled'); 
            // Restores transparent header when at top
        }
    });

    // --- Nav Links Highlighting Logic ---
    const navItems = document.querySelectorAll('.nav-links li'); 
    // Selects all navigation menu items

    let currentActiveIndex = 0; 
    // Stores the index of the currently selected menu item

    if (!document.querySelector('.nav-links li.active')) {
        navItems[0].classList.add('active'); 
        // Sets "Home" as active by default
    }

    navItems.forEach((item, index) => {

        item.addEventListener('click', () => {
            // Updates active menu item on click
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            currentActiveIndex = index; 
            // Saves selected item index
        });

        item.addEventListener('mouseenter', () => {
            // Temporarily highlights menu item on hover
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            // Restores previously selected menu item when hover ends
            item.classList.remove('active');
            navItems[currentActiveIndex].classList.add('active');
        });
    });

    // --- Search Bar Logic ---
    const searchBox = document.getElementById('searchBox'); 
    // Selects the search box container

    const searchIcon = document.getElementById('searchIcon'); 
    // Selects the search icon

    const searchInput = document.querySelector('.search-input'); 
    // Selects the search input field

    searchIcon.addEventListener('click', (e) => {
        // Toggles search input visibility on icon click
        e.stopPropagation(); 
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus(); 
            // Automatically focuses input when expanded
        }
    });

    document.addEventListener('click', (e) => {
        // Closes search bar when clicking outside
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });

    // --- Notification Logic ---
    const notificationIcon = document.getElementById('notificationIcon'); 
    // Selects the notification bell icon

    let notificationsEnabled = false; 
    // Tracks notification toggle state

    notificationIcon.addEventListener('click', () => {
        // Toggles notification state on click
        notificationsEnabled = !notificationsEnabled;
        if (notificationsEnabled) {
            notificationIcon.classList.add('active');
            alert("Notifications have been enabled");
        } else {
            notificationIcon.classList.remove('active');
            alert("Notifications have been disabled");
        }
    });

    // --- Profile Dropdown Logic ---
    const profileContainer = document.getElementById('profileContainer'); 
    // Selects profile dropdown container

    profileContainer.addEventListener('click', (e) => {
        // Toggles profile dropdown visibility
        e.stopPropagation();
        profileContainer.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        // Closes profile dropdown when clicking outside
        profileContainer.classList.remove('open');
    });

    // --- Slider Horizontal Scrolling Logic ---
    const sliders = document.querySelectorAll('.slider-wrapper'); 
    // Selects all slider sections

    sliders.forEach(wrapper => {
        const leftBtn = wrapper.querySelector('.left-arrow'); 
        // Selects left scroll button

        const rightBtn = wrapper.querySelector('.right-arrow'); 
        // Selects right scroll button

        const container = wrapper.querySelector('.row-posters'); 
        // Selects poster container

        leftBtn.addEventListener('click', () => {
            // Scrolls slider left smoothly
            const scrollAmt = window.innerWidth / 1.5;
            container.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            // Scrolls slider right smoothly
            const scrollAmt = window.innerWidth / 1.5;
            container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        });
    });

    // --- Video Player & Modal Logic ---
    const mainPlayBtn = document.getElementById('mainPlayBtn'); 
    // Selects main Play button

    const videoPlayerOverlay = document.getElementById('videoPlayerOverlay'); 
    // Selects fullscreen video overlay

    const closeVideoBtn = document.getElementById('closeVideoBtn'); 
    // Selects video close button

    const fullScreenPlayer = document.getElementById('fullScreenPlayer'); 
    // Selects fullscreen video player

    const bgVideo = document.getElementById('bgVideo'); 
    // Selects background hero video

    const moreInfoBtn = document.getElementById('moreInfoBtn'); 
    // Selects More Info button

    const modalBackdrop = document.getElementById('modalBackdrop'); 
    // Selects modal background overlay

    const closeModalBtn = document.getElementById('closeModalBtn'); 
    // Selects modal close button

    mainPlayBtn.addEventListener('click', () => {
        // Opens fullscreen video player
        videoPlayerOverlay.classList.remove('hidden');
        bgVideo.pause();
        fullScreenPlayer.play();
    });

    closeVideoBtn.addEventListener('click', () => {
        // Closes video player and restores hero video
        videoPlayerOverlay.classList.add('hidden');
        fullScreenPlayer.pause();
        fullScreenPlayer.currentTime = 0;
        bgVideo.play();
    });

    moreInfoBtn.addEventListener('click', () => {
        // Opens details modal and disables page scrolling
        modalBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', () => {
        // Closes modal and restores page scrolling
        modalBackdrop.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    modalBackdrop.addEventListener('click', (e) => {
        // Closes modal when clicking outside modal content
        if (e.target === modalBackdrop) {
            modalBackdrop.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    bgVideo.play().catch(e => console.log("Autoplay blocked/waiting for interaction", e));
    // Attempts autoplay while safely handling browser restrictions
});
