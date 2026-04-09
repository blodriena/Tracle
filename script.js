const burger = document.querySelector(".nav__burger");
const links = document.querySelector("[data-nav-links]");

if (burger && links) {
  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}


// const track = document.querySelector('.logos__track');
// let position = 0;
// let speed = 0.3;

// function animate(){
//   position -= speed;

//   if(Math.abs(position) >= track.scrollWidth / 2){
//     position = 0;
//   }

//   track.style.transform = `translateX(${position}px)`;
//   requestAnimationFrame(animate);
// }

// animate();