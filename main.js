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


 





