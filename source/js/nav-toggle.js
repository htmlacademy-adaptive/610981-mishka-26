let nav = document.querySelector(".navigation");
let navToggle = nav.querySelector(".navigation__toggle");

nav.classList.remove("navigation--js-none");
nav.classList.add("navigation--is-closed");

navToggle.addEventListener("click", () => { nav.classList.toggle("navigation--is-closed") });
