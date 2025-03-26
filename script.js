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
  delay: -1.5,
  ease: "expo.inOut"
});
