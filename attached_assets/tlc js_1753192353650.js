document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const scrollOffset = 80;

  // Smooth navbar transition
  function handleNavbarScroll() {
    if (window.scrollY > scrollOffset) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", debounce(handleNavbarScroll, 10));

  // Smooth scroll for anchor links with ease
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        scrollToTarget(target);
      }
    });
  });

  function scrollToTarget(target) {
    const yOffset = -70;
    const targetY = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  }

  // Animate elements on scroll with stagger effect
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100); // staggered reveal
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));

  // Utility: Debounce to prevent frequent firing
  function debounce(func, wait = 15, immediate = false) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
});
