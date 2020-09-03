// stoped at 01:02:57
// LÓGICA PARA MENU RESPONSIVO

let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial";

    // adiciono "on" no menu responsivo
    menuSection.classList.toggle("on", show);
    // Muda estade de true pra false e vice-versa
    show = !show;
})