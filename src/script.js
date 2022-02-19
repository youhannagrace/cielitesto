const anim = () => {
  const burger = document.querySelector(".burger");
  const navlinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `opacity 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    });
    burger.classList.toggle("close");
  });
};

anim();
