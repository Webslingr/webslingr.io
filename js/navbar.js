//Adds Onclick listener to hamburger menu and displays menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Adds event listener to close mobile menu when clicking on a link or any section of html
const navLink = document.querySelectorAll(".nav-link");
const section = document.querySelector("section");

navLink.forEach(n => n.addEventListener("click", closeMenu));
section.addEventListener("click", closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


