var tl = gsap.timeline();

tl.to("#fs", {
  height: 0,
  duration: 2,
  ease: "expo.inOut"
});

tl.to("#elem", {
  height: "100%",
  duration: 2,
  delay: -2,
  ease: "expo.inOut"
});

tl.to("#white", {
  height: "100%",
  duration: 2,
  delay: -1.8,
  ease: "expo.inOut"
});

document.querySelectorAll(".reveal").forEach((elem) => {
  let spanParent = document.createElement("span");
  let spanChild = document.createElement("span");

  spanParent.classList.add("parent");
  spanChild.classList.add("child");

  spanChild.text = elem.textContent;
  spanParent.appendChild(spanChild);

  elem.innerHTML = "";
  elem.appendChild(spanParent);

})

