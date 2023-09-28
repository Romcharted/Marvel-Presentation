gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    // Animation du texte dans la partie home
    const animatedText = document.querySelectorAll(".animated-text");
    animatedText.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add("active");
        }
    });

    const menus = gsap.utils.toArray(".obj-menu");
    menus.forEach((menu, index) => {
        gsap.from(menu, {
            opacity: 0,
            y: 100,
            scale: 0.8,
            duration: 1,
            scrollTrigger: {
                trigger: ".home",
                start: `top+=${index * 100}px`,
                end: "bottom 20%",
                scrub: true,
                markers: true,
            },
        });
    });

    gsap.to(".home", {
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "+=100%", // Épingle jusqu'à la fin du document
            pin: true,
            scrub: true,
            markers: true,
        },
    });
});
