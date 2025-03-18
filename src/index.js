function generateNewPoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "New poem here",
    autoStart: true,
    cursor: null,
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generateNewPoem);
