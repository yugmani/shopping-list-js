const inputEl = document.getElementById("shopping-item");
const btnEl = document.getElementById("button-add");
const listEl = document.getElementById("list-items");
const trashEl = document.querySelectorAll("trash-can");

const items = ["hat", "shoes", "sunglass", "pizza"];

const displayItems = (arr) => {
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
};

displayItems(items);

btnEl.addEventListener("click", function (event) {
  event.preventDefault();
  let newItem = inputEl.value.trim();
  console.log(newItem);
  items.push(newItem);
  displayItems(items);
  inputEl.value = "";
});
