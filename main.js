// Sticky menu background
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 120) {
//     this.document.querySelector("#nav").style.opacity = 0.9;
//     this.document.querySelector("#nav").style.background = "#e3530d";
//     this.document.querySelector("#nav").style.boxShadow = "0px 0px 7px black";
//   } else {
//     document.querySelector("#nav").style.opacity = 1;
//     this.document.querySelector("#nav").style.background = "#e3530d";
//   }
// });

// hamburger menu
const nav = document.getElementById("nav__mobile-ul");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
