const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');


    // Toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
    });

}




navSlide();


// Alert

alert("Hello! I am an alert box!!");