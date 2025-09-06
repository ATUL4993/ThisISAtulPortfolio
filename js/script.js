// Smooth fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Add stagger effect to skills and projects
const skillItems = document.querySelectorAll(".skill-item");
const projectCards = document.querySelectorAll(".project-card");

skillItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// Enhanced smooth scroll for navigation links with easing
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const targetPosition = target.offsetTop - 80; // Account for nav height

      // Smooth scroll with custom easing
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Subtle parallax effect with limit to prevent overlap
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const heroHeight = hero.offsetHeight;

  // Only apply parallax when hero is still visible
  if (scrolled < heroHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});
