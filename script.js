const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const navAnchors = [...document.querySelectorAll(".nav-links a[href^='#']")];
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const copyButtons = [...document.querySelectorAll("[data-copy]")];
const yearSlot = document.querySelector("[data-year]");
const scrollProgress = document.querySelector("[data-scroll-progress]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxTriggers = [...document.querySelectorAll("[data-lightbox-src]")];

if (yearSlot) {
  yearSlot.textContent = new Date().getFullYear();
}

const updateScrollProgress = () => {
  if (!scrollProgress) return;

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (navLinks?.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }

    history.pushState(null, "", targetId);
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

window.setTimeout(() => {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}, 1200);

const sectionMap = navAnchors
  .map((anchor) => {
    const section = document.querySelector(anchor.getAttribute("href"));
    return section ? { anchor, section } : null;
  })
  .filter(Boolean);

if ("IntersectionObserver" in window && sectionMap.length) {
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const active = sectionMap.find((item) => item.section === entry.target);
      if (!active) return;

      navAnchors.forEach((anchor) => anchor.classList.remove("is-active"));
      active.anchor.classList.add("is-active");
    });
  }, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  });

  sectionMap.forEach(({ section }) => activeObserver.observe(section));
}

copyButtons.forEach((button) => {
  const originalText = button.textContent;
  const copyLabel = button.dataset.copyLabel || "Text";

  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = `Copied ${copyLabel}`;
      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1400);
    } catch {
      button.textContent = value;
      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1800);
    }
  });
});

const closeLightbox = () => {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;

  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
};

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;

    const src = trigger.dataset.lightboxSrc;
    const title = trigger.dataset.lightboxTitle || "Project screenshot";
    const img = trigger.querySelector("img");
    if (!src) return;

    lightboxImage.src = src;
    lightboxImage.alt = img?.alt || title;
    lightboxCaption.textContent = title;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightboxClose?.focus();
  });
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
