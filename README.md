# Scroll Car Animation

Hero section where a car drives across the screen as you scroll.
Built with plain HTML, CSS, JavaScript and GSAP (ScrollTrigger).

## Run it
Open `index.html` in a browser. No build step needed.

## Structure
```
index.html
css/style.css
js/main.js
assets/car.svg
```

## How it works
- **Load animation:** headline letters stagger in, then the car, then the stats one by one.
- **Scroll animation:** the hero is pinned and a scrubbed GSAP timeline moves the car with scroll progress (`scrub: 1` smooths it).
- Only `transform` and `opacity` are animated, so there are no layout reflows while scrolling.

## Deploy to GitHub Pages
Push the folder to a repo -> Settings -> Pages -> deploy from `main` branch.
