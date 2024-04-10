const answerInputs = document.querySelectorAll('.answer');
const answerRadioInputs = document.querySelectorAll('.answer-radio');
const progressBar = document.getElementById('progress-bar');

// Calculate total number of questions
const totalQuestions = answerInputs.length + answerRadioInputs.length;

// Event listeners for text inputs
answerInputs.forEach(input => {
  input.addEventListener('input', updateProgressBar);
});

// Event listeners for radio inputs
answerRadioInputs.forEach(input => {
  input.addEventListener('change', updateProgressBar);
});

function updateProgressBar() {
  let filledInputs = 0;

  // Check text inputs
  answerInputs.forEach(input => {
    if (input.value.trim().length >= 3) {
      filledInputs++;
    }
  });

  // Check radio inputs
  answerRadioInputs.forEach(input => {
    if (input.checked) {
      filledInputs++;
    }
  });

  // Calculate progress percentage
  const progressPercentage = (filledInputs / totalQuestions) * 100;

  // Update progress bar width
  progressBar.style.width = progressPercentage + '%';
}
