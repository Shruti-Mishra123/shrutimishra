```javascript
/* ===========================
   TYPING ANIMATION
=========================== */

const words = [
  "WordPress Developer",
  "Elementor Expert",
  "Frontend Developer",
  "SEO Specialist"
];

const typingElement = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 60 : 120;

  if (!deleting && charIndex === currentWord.length + 1) {
    speed = 1500;
    deleting = true;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {

    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "column";
    navMenu.style.position = "absolute";
    navMenu.style.top = "90px";
    navMenu.style.right = "5%";
    navMenu.style.background = "#111827";
    navMenu.style.padding = "20px";
    navMenu.style.borderRadius = "12px";
    navMenu.style.gap = "20px";
  }

});

/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .hero-left, .hero-right"
);

function revealOnScroll() {

  const trigger = window.innerHeight * 0.85;

  revealElements.forEach((element) => {

    const top = element.getBoundingClientRect().top;

    if (top < trigger) {

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";

    }

  });

}

revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});

/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#10b981";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 25px rgba(16,185,129,.4)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topButton.style.display = "block";

  } else {

    topButton.style.display = "none";

  }

});

topButton.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});
```

