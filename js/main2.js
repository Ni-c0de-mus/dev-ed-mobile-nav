alert("Hello! I am an alert box!!");

// Animate Links

    const navLinks = document.QuerySelectorAll('.nav_links li');

navLinks.forEach((link, index) => {
    link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7}s'
});
console.log(index / 7);