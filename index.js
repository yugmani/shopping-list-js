const inputEl = document.getElementById("shopping-item");
const btnEl = document.getElementById("button-add");
const listEl = document.getElementById("list-items");

const items = ["hat", "shoes", "sunglass", "pizza"];

const saveToLocalStorage = (arr) => {
  arrJson = JSON.stringify(arr);
  localStorage.setItem("items", arrJson);
};

const removeItem = function (e) {
  const trashEl = document.querySelectorAll(".trash-can");

  trashEl.forEach((trash) => {
    trash.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target;
      const parentTarget = target.parentElement.parentElement;
      const contentTarget = parentTarget.textContent.trim();

      const strArr = localStorage.getItem("items");
      const array = JSON.parse(strArr);
      const position = array.indexOf(contentTarget);

      array.splice(position, 1);

      saveToLocalStorage(array);
      displayItems(array);
    });
  });
};

(function () {
  const strArr = localStorage.getItem("items");
  const array = JSON.parse(strArr);
  displayItems(array);
})();

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
  removeItem();
}

btnEl.addEventListener("click", function (event) {
  event.preventDefault();
  let newItem = inputEl.value.trim();
  const strArr = localStorage.getItem("items");
  const array = JSON.parse(strArr);

  array.push(newItem);
  saveToLocalStorage(array);
  displayItems(array);
  inputEl.value = "";
});
