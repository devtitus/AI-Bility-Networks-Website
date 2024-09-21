// Existing Hamburger Menu Toggle Open
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Existing Hamburger Menu Toggle Close
const navLink = document.querySelectorAll(".nav-link");

// Detect if the clicked link is not the dropdown toggle
navLink.forEach(n => n.addEventListener("click", function (e) {
    // If the clicked link is not the dropdown-toggle, close the menu
    if (!e.target.classList.contains("dropdown-toggle")) {
        closeMenu();
    }
}));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Dropdown Toggle for "Services" in Mobile Menu
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    dropdownMenu.classList.toggle("active"); // Toggle the dropdown menu visibility
});


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: 'top' });
ScrollReveal().reveal(".service-card, .obj-card, .ce-card, .sem-card, .testimonial-card", { origin: "bottom", interval: 16 });
ScrollReveal().reveal(".overview-heading, .overview-paragraph, .waw-wrapper figure img", { origin: "bottom", interval: 16 });
ScrollReveal().reveal(".left-wrapper, .left-higlights-wrapper, .cta-left-wrapper", { origin: "left" });
ScrollReveal().reveal(".right-wrapper, .right-highlights-wrapper, .waw-content-wrapper, .cta-right-wrapper", { origin: "right" });

/*==================== typed js ====================*/

const typed = new Typed(".cta-left-heading", {
    strings: ['Let us know what you think!'], // Text to type
    typeSpeed: 100, // Speed of typing forwards
    backSpeed: 50,  // Speed of erasing
    startDelay: 500, // Delay before typing starts
    backDelay: 1000, // Delay before it starts backspacing
    loop: true, // Loop it
});



