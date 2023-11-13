// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the elements that need to be toggled
    const navMenu = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');

    // Toggle the responsive navigation menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('nav-open');
    });
});
