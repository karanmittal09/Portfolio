
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
