const btnMenu = document.querySelector(".btn-burger");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a");
const menuOpenClass = "open";

/* Animation des liens */
const animateMenuLinks = (direction) => {
    return gsap.to(menuLinks, {
        opacity: direction === "in" ? 1 : 0,
        y: direction === "in" ? 0 : -20,
        duration: 0.3,
        ease: "power2." + (direction === "in" ? "out" : "in"),
        stagger: 0.1, // Décalage entre les animations des liens
    });
};

/* Fermeture du menu */
const closeMenu = () => {
    gsap.to(menu, {
        height: 0,
        opacity: 0,
        onComplete: () => {
            menu.classList.remove(menuOpenClass);
        },
    });
    animateMenuLinks("out");
};

/* Quand on clique sur un lien, on ferme le menu et on rétablie le btn burger */
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
        btnMenu.classList.toggle("active");
    });
});

btnMenu.addEventListener("click", () => {
    // Toggle pour la btn burger
    btnMenu.classList.toggle("active");

    const isOpen = menu.classList.contains(menuOpenClass);

    if (isOpen) {
        // Si le menu est ouvert, animation pour le fermer
        closeMenu();
    } else {
        // Si le menu est fermé, animation pour l'ouvrir
        gsap.to(menu, {
            height: "100%",
            opacity: 1,
            onComplete: () => {
                menu.classList.add(menuOpenClass);
                setTimeout(() => {
                    animateMenuLinks("in");
                }, 500);
            },
        });
    }
});
