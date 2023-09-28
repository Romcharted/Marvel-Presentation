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
                start: "top top",
                end: "center top",
                scrub: true,
            },
        });
    });
});
