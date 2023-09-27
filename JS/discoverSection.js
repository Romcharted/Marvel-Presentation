document.addEventListener("DOMContentLoaded", function () {
    const containerDiscover = document.querySelector(".container-discover");

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

    timeline.to(containerDiscover, {
        width: "140%",
        duration: 1,
        borderRadius: 0,
        paddingLeft: 15,
    });
});
