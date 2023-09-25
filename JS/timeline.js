// Permet de récupérer les informations dans le json timeline et de les ajouter dans la section timeline

let timeline = document.getElementById("timeline");

fetch("../Data/timeline.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie"); // Ajoutez une classe à la div

            const dateSpan = document.createElement("span");
            dateSpan.textContent = item.date;

            const titleParagraph = document.createElement("p");
            titleParagraph.textContent = item.title;

            movieDiv.appendChild(dateSpan);
            movieDiv.appendChild(titleParagraph);

            timeline.appendChild(movieDiv);
        });
    })
    .catch((error) => {
        console.error(
            "Une erreur s'est produite lors du chargement du JSON Timeline :",
            error
        );
    });

// Sélectionnez tous les éléments .movie
const movies = document.querySelectorAll(".movie");
// Parcourez chaque film et ajoutez des animations avec GSAP
movies.forEach((movie, index) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: movie,
            start: "top 80%", // Démarrez l'animation lorsque le haut du film atteint 80% de la vue
            end: "top 20%", // Arrêtez l'animation lorsque le haut du film atteint 20% de la vue
            toggleActions: "play none none reverse", // Jouez l'animation lors de l'entrée, inversez-la lors de la sortie
        },
    });

    // Animation d'entrée de gauche à droite
    tl.fromTo(
        movie,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5 }
    );

    // Animation de sortie de droite à gauche
    tl.to(
        movie,
        { x: "100%", opacity: 0, duration: 0.5 },
        `+=${index === movies.length - 1 ? 0 : 0.25}` // Ajoutez un délai entre les animations
    );
});
