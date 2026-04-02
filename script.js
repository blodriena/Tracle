const burger = document.querySelector(".nav__burger");
const links = document.querySelector("[data-nav-links]");

if (burger && links) {
  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}