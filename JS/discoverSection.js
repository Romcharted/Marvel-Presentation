document.addEventListener("DOMContentLoaded", function () {
    const containerDiscover = document.querySelector(".container-discover");
    const cobweb = document.querySelector(".cobweb");

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".discover",
            start: "center center",
            end: "bottom top",
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
        width: "140%",
        duration: 1,
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
