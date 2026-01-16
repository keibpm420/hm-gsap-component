const modal = () => {
    const modal = document.querySelector(".js-modal");
    const modalBg = document.querySelector(".js-modal-bg");
    const modalContents = document.querySelector(".js-contents");
    const openButton = document.querySelector(".js-button");
    const closeButton = document.querySelector(".js-close-button");

    if (!openButton || !modal) return;

    const openModal = () => {
        modal.showModal();

        gsap.fromTo(
            modalContents,
            {
                opacity: 0,
                scale: 0.95,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power4.out",
            }
        );

        modalBg.style.display = "block";

        gsap.fromTo(
            modalBg,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.15,
                ease: "power4.out",
            }
        );
    };

    const closeModal = () => {
        gsap.to(modalContents, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,

            onComplete: () => {
                modal.close();
            },
        });

        gsap.to(modalBg, {
            opacity: 0,
            duration: 0.15,

            onComplete: () => {
                modal.close();
                modalBg.style.display = "none";
            },
        });
    };

    openButton.addEventListener("click", (e) => {
        openModal();
    });

    closeButton.addEventListener("click", (e) => {
        closeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            closeModal();
        }
    });

    modal.addEventListener("click", (e) => {
        if (e.target.closest(".js-contents") === null) {
            closeModal();
        }
    });
};

modal();
