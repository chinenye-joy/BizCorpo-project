const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.querySelector(".nav-links");
const btns = document.querySelector(".buttons");
// const socialIcons = document.querySelector('.social-icons');

openMenu.addEventListener("click", () => {
  navLinks.classList.add("open");
  //   socialIcons.classList.add('open');
  btns.classList.add("open");

  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("open");
  //   socialIcons.classList.remove('open');
  btns.classList.remove("open");

  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
  // Add AOS attribute to the elements you want
  document.querySelectorAll(' section').forEach(section => {
    section.setAttribute('data-aos', 'fade-up'); // change to any effect you like
  });

  AOS.init({
    duration: 400, // fast animation
    once: true     // run only once
  });

  // Force AOS to detect sections
  AOS.refresh();
});
 





