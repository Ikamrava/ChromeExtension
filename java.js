const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
myleads = [];

function renderList() {
  let listItems = "";
  for (i = 0; i < myleads.length; i++) {
    listItems += `<a  href = ${myleads[i]} target = "_blank" ><li>  ${myleads[i]}  </li></a>`;
  }
  ulEl.innerHTML = listItems;
}
saveBtn.addEventListener("click", function () {
  myleads.push(inputEl.value);
  inputEl.value = "";
  renderList();
});
