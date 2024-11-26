//const { response } = require("../app");

console.log(" Front  JS ishga tushdi ");
function itemTemplate(item) {
  return ` <li
            style="margin-top: 20px; border-radius: 40px"
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
          >
            <span class="item-text">${item.reja}</span>
            <div>
              <button
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1"
              >
                Õzgartirish
              </button>
              <button
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm"
              >
                Õchirish
              </button>
            </div>
          </li>`;
}
let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Nimadir xato ketdi, qaytadan urunib ko`ring 🫶🏻", err);
    });
});

document.addEventListener("click", function (e) {
  console.log("Click event detected");
  if (e.target.classList.contains("delete-me")) {
    console.log("Delete button clicked");
    if (confirm("Are you sure for deletion?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Something went wrong. Please try again", err);
        });
    }
  }

  //   editing operations
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Insert your updates",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response);

          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          alert("Something went wrong. Please try again.");
        });
    }
  }
});

// clean All

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
