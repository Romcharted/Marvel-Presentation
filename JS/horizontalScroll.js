gsap.registerPlugin(ScrollTrigger);

// Défilement horizontal
let panels = gsap.utils.toArray(".panel");
let width = 5000;
let end = panels.length * width;

const timeline = gsap.timeline({
    ease: "none",
    scrollTrigger: {
        trigger: ".container__horizontal-scroll",
        pin: true,
        scrub: 0.5,
        end: `+=${end}`,
    },
});

panels.forEach((panel, index) => {
    const col1 = panel.querySelector(".col1");
    const col2 = panel.querySelector(".col2");
    const nbImgInCol1 = col1.querySelectorAll("img").length;
    const nbImgInCol2 = col2.querySelectorAll("img").length;

    const heightIMG = col1.querySelector("img").height;

    //  col2.style.transform = `translateY(-${panel.offsetHeight}px)`;

    let duration = 1;
    if (index === 0) {
        duration = 0;
    }
    console.log(heightIMG * nbImgInCol2);
    timeline

        .to(panels, {
            xPercent: -(100 * index),
            duration: duration,
            ease: "none",
        })
        .to(panel.querySelector(".panel .title"), {
            opacity: 1,
            y: -25,
            ease: "power2.out",
            duration: 1,
        })
        .from(
            panel.querySelector(".panel p"),
            {
                opacity: 0,
                y: -25,
                ease: "power2.out",
                duration: 1,
            },
            "<" // Démarre l'animation en même temps que la précédente
        )
        .from(
            col1,
            {
                y: `-${heightIMG * (nbImgInCol1 + 1)}`,
                ease: "power1.out",
                duration: 1,
            },
            "<" // Démarre l'animation en même temps que la précédente
        )
        .from(
            col2,
            {
                y: `-${nbImgInCol2 * heightIMG}}`,
                ease: "power1.out",
                duration: 1,
            },
            "<" // Démarre l'animation en même temps que la précédente
        );

    if (index === panels.length - 1) {
        timeline.to(panels, {
            xPercent: -(100 * (panels.length - 1)),
            duration: panels.length - index,
        });
    }
});
