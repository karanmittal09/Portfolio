
// Loader Function
function initLoader() {
  gsap.to("#loader", {
    opacity: 0,
    duration: 2.5,
    ease: "expo.inOut",
    onComplete: function () {
      document.getElementById("loader").style.display = "none";

      gsap.timeline()
        .to("#intro", {
          height: 0,
          duration: 2, 
          ease: "expo.inOut",
        })
        .to("#bada", {
          opacity: 1, // ✅ No display animation here
          duration: 2,
          ease: "expo.inOut",
          onStart: function () {
            document.getElementById("bada").style.display = "block"; // ✅ Corrected
          },
          onComplete: function () {
            initSwiper(); // ✅ Call Swiper after animations
          },
        });
    },
  });
}

// check if all elements of loader,intro,bada is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("loader") && document.getElementById("intro") && document.getElementById("bada")) {
    initLoader();
  } else {
    console.error("Required elements with IDs 'loader', 'intro', or 'bada' are missing in the HTML.");
  }
});


// Swiper Initialization
function initSwiper() {
  new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
  });
}

// Mobile Menu
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

  if(navToggle){
    navToggle.addEventListener("click", ()=> {
      navMenu.classList.add("shpw-menu");
    })
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  //Remove menu on link click
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  }));

  //skills accordion
  const skillsHeader = document.querySelector(".skills_header");

  skillsHeader.forEach((el) => {
    el.addEventListner("click", function (){
      const parent = this.parentNode;

    //Toggle clicked section 
    parent.classList.toggle("skills__open");
    parent.classList.toggle("skills__close");

    });
  });

// Services Modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    modalViews[i].classList.add("active-modal");
  });
});

modalCloses.forEach((close) => {
  close.addEventListener("click", () => {
    modalViews.forEach((view) => {
      view.classList.remove("active-modal");
    });
  });
});

// Scroll sections Active Link
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
});

// Scroll Header
window.addEventListener("scroll", function () {
  const nav = document.getElementById("header");
  nav.classList.toggle("scroll-header", this.scrollY >= 80);
});

// Scroll Up
window.addEventListener("scroll", function () {
  const scrollUp = document.getElementById("scroll-up");
  scrollUp.classList.toggle("show-scroll", this.scrollY >= 560);
});

// Dark/Light Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", document.body.classList.contains(darkTheme) ? "dark" : "light");
  localStorage.setItem("selected-icon", themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");
});


  