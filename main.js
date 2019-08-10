TweenMax.to(".loading-screen", 4, {
  delay: 1.6,
  top: "-110%",
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 3, {
  delay: 3.6,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".contact", 3, {
  delay: 3.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".options", 3, {
  delay: 4.0,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".bottom-text", 3, {
  delay: 4.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".copyright", 3, {
  delay: 4.6,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    delay: 4.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  },
  0.1
);

TweenMax.from(".menu", 3, {
  delay: 5.0,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".p1", 3, {
  delay: 5.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".p2", 3, {
  delay: 5.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
  delay: 5.6,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from("#two", 3, {
  delay: 5.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

const tl = new TimelineMax();

tl.from(".ringOne", 4, {
  delay: 0.4,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
})
  .from(
    ".ringTwo",
    4,
    {
      delay: 0.9,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
    },
    "=-5"
  )
  .to(".ringOne", 4, {
    delay: 0.4,
    x: 40,
    ease: Expo.easeInOut
  })
  .to(
    ".ringTwo",
    4,
    {
      delay: 0.9,
      x: 40,
      ease: Expo.easeInOut
    },
    "=-5"
  );

const textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml7 .letter",
  translateY: ["1.1em", 0],
  translateX: ["0.55em", 0],
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 750,
  easing: "easeOutExpo",
  delay: function(el, i) {
    return 9000 + 50 * i;
  }
});
