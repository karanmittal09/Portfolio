
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