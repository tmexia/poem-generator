function writePoem(response) {
  alert(response.data.answer);
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 100,
    cursor: null,
  });
}

function generateNewPoem(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#topic-input");
  let apiKey = "2affcb912c0bbco36ateff4a191143bb";
  let prompt = `Please write a poem for children about ${topicInput.value}. Please limit the answer to a 4 line poem and to the poem itself. Please give the answer in basic html paragraphs. Sign the poem by "SheCodes AI". Be polite. Thank you.`;
  let context = "You are an expert in poetry, focused in children literature.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(writePoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generateNewPoem);
