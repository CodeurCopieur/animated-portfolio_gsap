const timeline = gsap.timeline();
//text
timeline.from(".text", {
  duration: .8,
  delay: .5,
  opacity: 0,
  ease: "power4.out",
  x: 100,
  skewX: 20,
  stagger: {
    amount: .4
  }
});

//header
timeline.from(".logo, .menu", {
  duration: .6,
  y: 100,
  stagger: {
    amount: .4
  }
},"-=.3");

//pics
timeline.from(".pic1", {
  duration: 1,
  position: "absolute",
  top: "100%",
  left: "50%",
  ease: "power2.out",
  x: "-50%",
  y: "-50%",
  filter: "grayscale(1)"
});

timeline.from(".pic2, .pic3, .pic4", {
  duration: 1.5,
  position: "absolute",
  top: "100%",
  left: "50%",
  ease: "power2.out",
  x: "-50%",
  y: "-50%",
  filter: "grayscale(1)",
  stagger: {
    amount: 1.5
  }
},"-=.5");


timeline.from(".circle1, .circle2", {
  duration: .8,
  height: 0,
  width: 0,
  ease: "power4.out",
  stagger: {
    amount: .8
  }
},"-=.5");