document.addEventListener("DOMContentLoaded", () => {

  // ---- Cart Button ----
  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      // Change button text
      cartBtn.textContent = "Added!";

      // Trigger bounce animation
      cartBtn.style.animation = "none"; // reset
      void cartBtn.offsetWidth;         // force reflow
      cartBtn.style.animation = "cartAdded 0.6s ease";

      // Revert text after 1.5s if you want
      setTimeout(() => {
        cartBtn.textContent = "Add to Cart";
      }, 1500);
    });
  }

  // ---- Modal ----
  const modal = document.getElementById("infoModal");
  const infoBtn = document.getElementById("infoBtn");
  const closeBtn = document.querySelector(".close");

  if (infoBtn) infoBtn.onclick = () => modal.style.display = "block";
  if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
  };

  // ---- Message loop ----
  const msgs = document.querySelectorAll(".msg");
  let current = 0;
  const displayTime = 8000;   // visible time
  const transitionTime = 800; // slide duration
  const gapTime = 500;        // extra gap

  msgs.forEach((msg, index) => {
    if (index === 0) {
      msg.classList.add("active");
    } else {
      msg.style.transform = "translateX(100%)";
      msg.style.opacity = "0";
    }
  });

  function showNextMessage() {
    const active = msgs[current];
    const nextIndex = (current + 1) % msgs.length;
    const next = msgs[nextIndex];

    // Slide current out
    active.style.transform = "translateX(-200%)";
    active.style.opacity = "0";

    setTimeout(() => {
      active.style.transform = "translateX(100%)";
      next.style.transform = "translateX(-50%)";
      next.style.opacity = "1";

      current = nextIndex;
      setTimeout(showNextMessage, displayTime);
    }, transitionTime + gapTime);
  }

  setTimeout(showNextMessage, displayTime);
});


const slides = document.querySelectorAll(".slide");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author span");

slides.forEach(slide => {
  slide.addEventListener("mouseenter", () => {
    slides.forEach(s => s.classList.remove("active"));
    slide.classList.add("active");

    const quote = slide.getAttribute("data-quote");
    const author = slide.getAttribute("data-author");

    quoteText.textContent = quote;
    quoteAuthor.textContent = author;
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return; // safety check

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const current = window.scrollY;

    // Show after scrolling down 600px
    if (current > 600) {
      // scrolling down
      if (current > lastScroll) {
        backToTop.classList.add("show");
      }
    }

    // Hide immediately when scrolling up
    if (current < lastScroll) {
      backToTop.classList.remove("show");
    }

    lastScroll = current;
  });

  // Scroll back to top on click
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});




