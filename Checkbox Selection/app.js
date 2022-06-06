const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => changeChecked(e.target))
);

function changeChecked(checkedItem) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === checkedItem) {
      fast.checked = false;
    }

    if (fast === checkedItem) {
      cheap.checked = false;
    }

    if (cheap === checkedItem) {
      good.checked = false;
    }
  }
}
