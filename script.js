document.addEventListener('DOMContentLoaded', () => {
    // Wait for DOM to load fully

    // --- Header Background Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Nav Links Highlighting Logic ---
    const navItems = document.querySelectorAll('.nav-links li');
    let currentActiveIndex = 0; 

    // Initialize: Set Home active by default
    if (!document.querySelector('.nav-links li.active')) {
        navItems[0].classList.add('active');
    }

    navItems.forEach((item, index) => {
        // Click Event: Update selection
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active')); 
            item.classList.add('active');
            currentActiveIndex = index;
        });

        // Hover Event: Temporary highlight
        item.addEventListener('mouseenter', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });

        // Mouse Leave Event: Restore selection
        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
            navItems[currentActiveIndex].classList.add('active');
        });
    });

    // --- Search Bar Logic ---
    const searchBox = document.getElementById('searchBox');
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', (e) => {
        e.stopPropagation(); 
        searchBox.classList.toggle('active');
        if(searchBox.classList.contains('active')){
            searchInput.focus();
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });

    // --- Notification Logic ---
    const notificationIcon = document.getElementById('notificationIcon');
    let notificationsEnabled = false;

    notificationIcon.addEventListener('click', () => {
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
    
    profileContainer.addEventListener('click', (e) => {
        e.stopPropagation(); 
        profileContainer.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        profileContainer.classList.remove('open');
    });

    // --- Slider Horizontal Scrolling Logic ---
    const sliders = document.querySelectorAll('.slider-wrapper');

    sliders.forEach(wrapper => {
        const leftBtn = wrapper.querySelector('.left-arrow');
        const rightBtn = wrapper.querySelector('.right-arrow');
        const container = wrapper.querySelector('.row-posters');

        leftBtn.addEventListener('click', () => {
            const scrollAmt = window.innerWidth / 1.5; 
            container.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            const scrollAmt = window.innerWidth / 1.5;
            container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        });
    });

    // --- Video Player & Modal Logic ---
    const mainPlayBtn = document.getElementById('mainPlayBtn');
    const videoPlayerOverlay = document.getElementById('videoPlayerOverlay');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const fullScreenPlayer = document.getElementById('fullScreenPlayer');
    const bgVideo = document.getElementById('bgVideo');

    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');

    mainPlayBtn.addEventListener('click', () => {
        videoPlayerOverlay.classList.remove('hidden');
        bgVideo.pause(); 
        fullScreenPlayer.play(); 
    });

    closeVideoBtn.addEventListener('click', () => {
        videoPlayerOverlay.classList.add('hidden');
        fullScreenPlayer.pause();
        fullScreenPlayer.currentTime = 0;
        bgVideo.play(); 
    });

    moreInfoBtn.addEventListener('click', () => {
        modalBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    });

    closeModalBtn.addEventListener('click', () => {
        modalBackdrop.classList.add('hidden');
        document.body.style.overflow = 'auto'; 
    });

    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            modalBackdrop.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    bgVideo.play().catch(e => console.log("Autoplay blocked/waiting for interaction", e));
});