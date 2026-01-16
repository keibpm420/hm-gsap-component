const hamburgerMenu = () => {
    const menu = document.querySelector(".js-menu");
    const openButton = document.querySelector(".js-button");
    const closeButton = document.querySelector(".js-close-button");

    if (!openButton || !menu) return;

    const openMenu = () => {
        menu.showModal();

        gsap.fromTo(
            menu,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.3,
                ease: "power4.out",
            }
        );
    };

    const closeMenu = () => {
        gsap.to(menu, {
            opacity: 0,
            duration: 0.3,
            ease: "power4.out",

            onComplete: () => {
                menu.close();
            },
        });
    };

    openButton.addEventListener("click", (e) => {
        openMenu();
    });

    closeButton.addEventListener("click", (e) => {
        closeMenu();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeMenu();
        }
    });
};

hamburgerMenu();
