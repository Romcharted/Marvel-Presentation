gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1) - 15,
    ease: "none",
    scrollTrigger: {
        trigger: ".container__horizontal-scroll",
        pin: true,
        scrub: 1,
        end: "+=5000",
    },
});
