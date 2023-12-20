// Function to handle navigation sliding and animation
const navSlide = () => {
    // Selecting the hamburger icon
    const hamburger = document.querySelector('.hamburger');
    // Selecting the navigation links container
    const nav = document.querySelector('.nav-links');
    // Selecting all individual navigation links
    const navLinks = document.querySelectorAll('.nav-links li');

    // Adding a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggling the 'nav-active' class to show/hide the navigation links
        nav.classList.toggle('nav-active');

        // Iterating through each navigation link
        navLinks.forEach((link, index) => {
            // Ternary operator: setting the animation based on whether it's currently set or not
            link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        });

        // Toggling the 'toggle' class for hamburger animation
        hamburger.classList.toggle('toggle');
    });
};

// Invoking the navSlide function
navSlide();
