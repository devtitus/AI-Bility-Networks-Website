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
