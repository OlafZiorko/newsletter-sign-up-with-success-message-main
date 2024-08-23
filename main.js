const submitBtn = document.querySelector(".submitBtn");
const userInput = document.querySelector(".userEmail");
const form = document.querySelector(".form");
const label = document.querySelector(".label");
const mainElement = document.querySelector(".main");
const modalElement = document.querySelector(".modal");
const modalBtn = document.querySelector(".modalBtn");
// Create a MediaQueryList object
let mediaScreen = window.matchMedia("(min-width: 1440px)");

//functions

function changeStyle(mediaScreen) {
  let image = document.querySelector(".header--img");
  if (mediaScreen.matches) {
    image.setAttribute(
      "src",
      "./assets/images/illustration-sign-up-desktop.svg"
    );
  } else {
    image.setAttribute(
      "src",
      "./assets/images/illustration-sign-up-mobile.svg"
    );
  }
}
changeStyle(mediaScreen);

// validation
function checkForm() {
  const userInputValue = userInput.value;
  userInput.value === "" || !userInput.value.includes("@")
    ? userInput.classList.add("error") || label.classList.add("error")
    : userInput.classList.add("sucess") ||
      label.classList.remove("error") ||
      setTimeout(showModal, 2000);
}

// showModal
function showModal() {
  mainElement.style.display = "none";
  modalElement.style.display = "flex";
  let userEmail = (document.querySelector(
    ".modal--email"
  ).textContent = `${userInput.value}`);
}
function hideModal() {
  mainElement.style.display = "grid";
  modalElement.style.display = "none";
  userInput.classList.remove("sucess");
  userInput.classList.remove("error");
  userInput.value = "";
}

// listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
submitBtn.addEventListener("click", checkForm);
modalBtn.addEventListener("click", hideModal);
mediaScreen.addEventListener("change", function () {
  changeStyle(mediaScreen);
});
