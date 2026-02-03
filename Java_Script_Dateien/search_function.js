/* ===============
  Searchfunction
==================*/

const searchInput = document.getElementById("search_input");
const filterButtons = document.querySelectorAll("#schoolmonsFilters button");
const cards = document.querySelectorAll("#schoolmons .box");

let activeType = "all";

if (searchInput) {
  searchInput.addEventListener("input", filterCards);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeType = button.dataset.type || "all";
    filterCards();
  });
});

function filterCards() {
  const schoolmonsSection = document.getElementById("schoolmons");
  if (!schoolmonsSection.classList.contains("active")) return;

  const searchValue = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name?.toLowerCase() || "";
    const type = card.dataset.type;

    const matchesSearch = name.includes(searchValue);
    const matchesType =
      activeType === "all" || type === activeType;

    card.style.display =
      matchesSearch && matchesType ? "flex" : "none";
  });
}
