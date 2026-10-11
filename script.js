
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Мобильное меню
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Закрыть меню" : "Открыть меню"
  );
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Закрываем меню после перехода по ссылке
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Открыть меню");
    menuToggle.textContent = "☰";
  });
});

// Фильтр галереи
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".art-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((filter) => {
      filter.classList.toggle("active", filter === button);
    });

    cards.forEach((card) => {
      const matches =
        selected === "all" ||
        card.dataset.category === selected;

      card.classList.toggle("hidden", !matches);
    });
  });
});

// Открытие рисунков в большом размере
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".art-image").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.dataset.title;
    lightboxTitle.textContent = button.dataset.title;

    lightbox.showModal();
  });
});

// Закрытие окна
lightboxClose.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

lightbox.addEventListener("close", () => {
  lightboxImage.src = "";
});

// Текущий год в подвале
document.getElementById("year").textContent =
  new Date().getFullYear();
