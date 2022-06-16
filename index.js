const inputEl = document.getElementById("shopping-item");
const btnEl = document.getElementById("button-add");
const listEl = document.getElementById("list-items");

const items = ["hat", "shoes", "sunglass", "pizza"];

window.onload = displayItems(items);

function displayItems(arr) {
  let html = "";
  arr.map((item) => {
    html += `
    <li>
    ${item}<span class="trash-can"
      ><i class="fas fa-trash-alt"></i
    ></span>
  </li>`;
    return html;
  });

  listEl.innerHTML = html;
}

btnEl.addEventListener("click", function (event) {
  event.preventDefault();
  let newItem = inputEl.value.trim();
  items.push(newItem);
  displayItems(items);
  inputEl.value = "";
});

const trashEl = document.querySelectorAll(".trash-can");

trashEl.forEach((trash) => {
  trash.addEventListener("click", function (e) {
    const target = e.target;
    console.log(target);
    const parentTarget = target.parentElement.parentElement;
    const contentTarget = parentTarget.textContent.trim();
    const position = items.indexOf(contentTarget);
    console.log(target, position);
    items.splice(position, 1);
    displayItems(items);
  });
});
