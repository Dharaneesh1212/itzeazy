const answerInputs = document.querySelectorAll(".answer");
const answerRadioInputs = document.querySelectorAll(".answer-radio");
const progressBar = document.getElementById("progress-bar");

const totalQuestions = answerInputs.length + answerRadioInputs.length;

answerInputs.forEach((input) => {
  input.addEventListener("input", updateProgressBar);
});

answerRadioInputs.forEach((input) => {
  input.addEventListener("change", updateProgressBar);
});

function updateProgressBar() {
  let filledInputs = 0;

  answerInputs.forEach((input) => {
    if (input.value.trim().length >= 3) {
      filledInputs++;
    }
  });

  answerRadioInputs.forEach((input) => {
    if (input.checked) {
      filledInputs++;
    }
  });

  const progressPercentage = (filledInputs / totalQuestions) * 100;

  progressBar.style.width = progressPercentage + "%";
}
