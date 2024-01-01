// On import discoverSection pour déclenché l'animation après que tous soit chargé
import { discoverSectionSpiderMan } from "./discoverSection.js";

// Permet de récupérer les informations dans le json timeline et de les ajouter dans la section timeline + application de l'animation Gsap

let timeline = document.getElementById("timeline");

fetch("https://romcharted.github.io/Marvel-Presentation/Data/timeline.json")
    .then((response) => response.json())
    .then((data) => {
        // Création de la timeline
        data.forEach((item) => {
            const containerMovieDiv = document.createElement("div");
            containerMovieDiv.classList.add("container-movie");

            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");

            const dateSpan = document.createElement("span");
            dateSpan.textContent = item.date;

            const titleParagraph = document.createElement("p");
            titleParagraph.textContent = item.title;

            movieDiv.appendChild(dateSpan);
            movieDiv.appendChild(titleParagraph);
            containerMovieDiv.appendChild(movieDiv);
            timeline.appendChild(containerMovieDiv);
        });

        // Après la création dans le DOM de la timeline
        const containers = document.querySelectorAll(".container-movie");

        containers.forEach((container) => {
            gsap.set(container, { opacity: 0, x: -400 }); // Propriétés initiales

            // Timeline d'animation pour chaque conteneur
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 1,
                },
            });

            tl.to(container, {
                duration: 1,
                ease: "power2.out",
                opacity: 1,
                x: 0,
            });

            // Ajoutez une animation de sortie
            tl.to(
                container,
                {
                    duration: 1,
                    ease: "power2.in",
                    opacity: 0,
                    x: 400,
                },
                ">1.2"
            );
        });

        discoverSectionSpiderMan();
    })
    .catch((error) => {
        console.error(
            "Une erreur s'est produite lors du chargement du JSON Timeline :",
            error
        );
    });
