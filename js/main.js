gsap.registerPlugin(ScrollTrigger);

const car = document.querySelector(".car");

// split the headline into letters so each one can be animated
const headline = document.getElementById("headline");
headline.innerHTML = headline.textContent
  .split("")
  .map(ch => (ch === " " ? " " : `<span class="letter">${ch}</span>`))
  .join("");

// stats start hidden and slightly lower
gsap.set(".stat", { y: 40 });

// ---------- 1. load animation ----------
const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

intro
  .from(".letter", { opacity: 0, y: 30, duration: 1, stagger: 0.06 })
  .from(".car", { opacity: 0, duration: 1 }, "-=0.5");

// ---------- 2. scroll animation ----------
// scrub: 1 -> animation lags the scrollbar by about a second, so it feels eased
const scrollTl = gsap.timeline({
  defaults: { ease: "none" },
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true // recalculates the distance on resize
  }
});

// car goes from the leftmost edge to the rightmost edge
scrollTl.to(car, { x: () => window.innerWidth - car.offsetWidth, duration: 1 }, 0);

// road slides back under the car
scrollTl.to("#roadLines", { backgroundPositionX: "-660px", duration: 1 }, 0);

// each stat shows up when the car reaches its part of the screen
const showAt = [0.12, 0.36, 0.6, 0.84];
document.querySelectorAll(".stat").forEach((stat, i) => {
  scrollTl.to(stat, { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" }, showAt[i]);
});
