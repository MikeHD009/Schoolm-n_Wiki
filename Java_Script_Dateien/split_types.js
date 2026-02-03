/* ==========================
  Orte & Schoolmóns & Items
============================= */

const sections = ["schoolmons", "orte", "items"];
let currentIndex = 0;

function updateView() {
  sections.forEach((id, index) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle("active", index === currentIndex);
    }
  });

  const title = document.getElementById("sectionTitle");
  if (title) {
    title.textContent =
      sections[currentIndex].charAt(0).toUpperCase() +
      sections[currentIndex].slice(1);
  }

  const filters = document.getElementById("schoolmonsFilters");
  if (filters) {
    filters.style.display =
      sections[currentIndex] === "schoolmons" ? "block" : "none";
  }

  if (sections[currentIndex] !== "schoolmons") {
    document.querySelectorAll("#schoolmons .box").forEach(card => {
      card.style.display = "flex";
    });

    if (window.activeType !== undefined) {
      window.activeType = "all";
    }

    const searchInput = document.getElementById("search_input");
    if (searchInput) searchInput.value = "";
  }
}

function nextSection() {
  currentIndex = (currentIndex + 1) % sections.length;
  updateView();
}

function prevSection() {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  updateView();
}

document.addEventListener("DOMContentLoaded", updateView);