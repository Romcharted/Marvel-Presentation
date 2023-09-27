document.addEventListener("DOMContentLoaded", function () {
    const containerDiscover = document.querySelector(".container-discover");
    const cobweb = document.querySelector(".cobweb");

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".discover",
            duration: 5000,
            start: "center center",
            end: "+=2000",
            scrub: 1,
            pin: true,
        },
    });

    // Animation pour amener la cobweb de 100% à 0%
    timeline.to(cobweb, {
        x: "0%",
        duration: 1,
    });

    timeline.to(containerDiscover, {
        width: "120%",
        duration: 8,
        borderRadius: 0,
        paddingLeft: 15,
        onUpdate: () => {
            // Met à jour la position horizontale de l'image pendant l'animation
            const containerWidth = parseFloat(
                getComputedStyle(containerDiscover).width
            );

            cobweb.style.transform = `translateX(${containerWidth}px)`;
        },
    });
});
