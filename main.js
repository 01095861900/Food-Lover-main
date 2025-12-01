// ================= NAVBAR TOGGLE (Mobile) =================
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// ================= CLOSE MENU WHEN CLICK LINK =================
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// ================= SCROLL ANIMATION FOR NAVBAR =================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ================= BACK TO TOP BUTTON =================
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// ================= SIMPLE SCROLL EFFECT (SECTIONS) =================
const sections = document.querySelectorAll("section");

const showOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.2;

    if (sectionTop < screenHeight) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// ================= SMOOTH SCROLL LINKS =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
