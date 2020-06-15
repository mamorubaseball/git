const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberBand");
  })
);
/*skills============================*/

const htmlBar = document.querySelector(".bar-html");
const cssBar = document.querySelector(".bar-css");
const jsBar = document.querySelector(".bar-javascript");
const reactBar = document.querySelector(".bar-react");

var t1 = new TimelineLite();
t1.fromTo(
  htmlBar,
  0.75,
  { width: "calc(0% - 6px)" },
  { width: "calc(90% - 6px)", ease: Power4.easeOut }
)
  .fromTo(
    cssBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(90% - 6px)", ease: Power4.easeOut }
  )
  .fromTo(
    jsBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(90% - 6px)", ease: Power4.easeOut }
  )
  .fromTo(
    reactBar,
    0.75,
    { width: "calc(0% - 6px)" },
    { width: "calc(90% - 6px)", ease: Power4.easeOut }
  );

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".skills",
  triggerHook: 0,
})
  .setTween(t1)
  .addTo(controller);

const menuItems = document.querySelectorAll(".work-category button");
const contents = document.querySelectorAll(".category");
menuItems.forEach((menuitem) => {
  menuitem.addEventListener("click", () =>
    menuItems.forEach((item) => {
      item.classList.remove("active");
    })
  );
  menuitem.classList.add("active");
  contents.forEach((content) => {
    content.classList.remove("active");
  });
  document.getElementById(menuitem.dataset.id).classList.add("active");
});
