//! Hamburger menu

const navbar = document.querySelector(".navbar-nav");
const togglebtn = document.querySelector(".nav-toggle-btn");
const navitem = document.querySelectorAll(".nav-item");

const hamburgermenu = function () {
  navbar.classList.toggle("active");
  togglebtn.classList.toggle("active");
};

togglebtn.addEventListener("click", hamburgermenu);

for (let i = 0; i < navitem.length; i++) {
  navitem[i].addEventListener("click", hamburgermenu);
}

//! Scroll to top

const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
