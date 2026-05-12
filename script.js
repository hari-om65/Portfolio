// Smooth reveal animation

const hero = document.querySelector(".hero");

window.addEventListener("load", () => {

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0px)";

    }, 200);

});
