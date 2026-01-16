const dropdownMenu = () => {
    const button = document.querySelector(".js-button");
    const menu = document.querySelector(".js-menu");
    const isOpen = "is-open";

    if (!button || !menu) return;

    const openMenu = () => {
        menu.classList.add(isOpen);

        gsap.fromTo(
            menu,
            {
                opacity: 0,
                scale: 0.95,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.15,
                ease: "back.out(1.7)",
            }
        );
    };

    const closeMenu = () => {
        gsap.to(menu, {
            opacity: 0,
            scale: 0.95,
            duration: 0.15,
            ease: "back.out(1.7)",

            onComplete: () => {
                menu.classList.remove(isOpen);
            },
        });
    };

    button.addEventListener("click", (e) => {
        e.stopPropagation();

        if (menu.classList.contains(isOpen)) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener("click", (e) => {
        closeMenu();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
};

dropdownMenu();
