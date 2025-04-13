var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


// Animate progress bars
document.addEventListener("DOMContentLoaded", () => {
    // Linear progress
    document.querySelectorAll(".progress-bar").forEach(bar => {
        const value = bar.getAttribute("data-value");
        bar.style.width = value + "%";
    });

    // Radial progress
    document.querySelectorAll(".radial-bar").forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        const circle = bar.querySelector(".progress-circle");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 200);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bannerElements = document.querySelectorAll('.image-banner h1, .image-banner h2, .image-banner h3, .image-banner p, .social-links');
    const allServices = document.querySelectorAll(".service1 , .service2 ,.service3 , .service4")
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const cardHover = document.querySelectorAll('.card-hover');
    const profileImg = document.querySelectorAll(".profile-img")
    const logo = document.querySelector('.logo');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(logo);
    navLinks.forEach(link => observer.observe(link));
    bannerElements.forEach(el => observer.observe(el));
    profileImg.forEach(profile => observer.observe(profile));
    allServices.forEach(service => observer.observe(service));
    cardHover.forEach(card => observer.observe(card));
    cardHover
});