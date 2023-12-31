gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    /* ============================ Animation text home ============================ */
    // Animation du texte dans la partie home
    const animatedText = document.querySelectorAll(".animated-text");
    animatedText.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add("active");
        }
    });
    /* ============================ END Animation text home ============================ */

    /* ============================ OBJ MENU ============================ */
    const objMenuLinks = document.querySelectorAll(".smooth-link");

    objMenuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition =
                    targetElement.getBoundingClientRect().top + window.scrollY;

                // Faire défiler la page jusqu'à la section cible en douceur
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });

    const objMenus = gsap.utils.toArray(".obj-menu");
    objMenus.forEach((menu, index) => {
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

    /* ============================ END OBJ MENU ============================ */
});
