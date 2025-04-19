

var typed = new Typed(".text", {
    strings: [
        "Aspiring Full-Stack Developer",
        "Frontend Enthusiast",
        "JavaScript Explorer",
        "Creative Web Designer",

    ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});



document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".progress-bar").forEach(bar => {
        const value = bar.getAttribute("data-value");
        bar.style.width = value + "%";
    });


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
        }, 800);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const bannerElements = document.querySelectorAll('.image-banner h1, .image-banner h2, .image-banner h3, .image-banner p, .social-links');
    const allServices = document.querySelectorAll(".service1 , .service2 ,.service3 , .service4");
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const animatedCards = document.querySelectorAll('.img1, .img2, .img3, .img4, .img5, .img6, .img7');
    const profileImg = document.querySelectorAll(".profile-img");
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
    animatedCards.forEach(card => observer.observe(card));
});



const messageFunc = () => {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "data");

            const modal = new bootstrap.Modal(document.getElementById('successModal'));
            modal.show();


            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.log("Error", error.message);
        });
};
