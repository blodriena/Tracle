const burger = document.querySelector(".nav__burger");
const links = document.querySelector("[data-nav-links]");

if (burger && links) {
  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}

const track = document.querySelector('.logos__track');

if (track) {
  let position = 0;
  const speed = 0.6; 

  function step() {
    position -= speed;
    
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }
    
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(step);
  }

  step();
}