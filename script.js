const input = document.querySelector("#iteminput");
const list = document.querySelector("ul");
const addbtn = document.querySelector("#add");

const addItem = () => {
  if (input.value != "") {
    list.insertAdjacentHTML(
      "beforeend",
      `<li>${input.value}  <button class="delete">delete</button></li>`
    );
  }
};

addbtn.addEventListener("click", addItem);

list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    li.parentElement.removeChild(li);
  }
});
