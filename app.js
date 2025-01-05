// Цей код знизу відповідає за те щоб робити імена в діалозі жирним шрифтом.
function formatDialogue() {
  const dialogueDiv = document.getElementById("dialogue");
  dialogueDiv.innerHTML = dialogueDiv.innerHTML.replace(/([A-Za-z]+):/g, '<strong style="color: #6363ee;">$1</strong>:');

  const correctDialogueDiv = document.getElementById("correctDialogueContent");
  correctDialogueDiv.innerHTML = correctDialogueDiv.innerHTML.replace(/([A-Za-z]+):/g, '<strong style="color: #6363ee;">$1</strong>:');
}
//****************************************
function checkAnswers() {
  const correctAnswers = "{{Correct Answers}}".split('|'); // Розбиваємо правильні відповіді на масив const correctAnswers = "{{Correct Answers}}".split('|');
  const inputs = document.querySelectorAll('input'); // Отримуємо всі поля введення
  let allCorrect = true; // Флаг, чи всі відповіді правильні

  inputs.forEach((input, index) => {
    if (input.value.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase()) {
      input.style.borderColor = "green"; // Зелена рамка для правильних відповідей
    } else {
      input.style.borderColor = "red"; // Червона рамка для неправильних
      allCorrect = false;
    }
  });

  const feedback = document.getElementById("feedback");
  if (allCorrect) {
    feedback.textContent = "Всі відповіді правильні!";
    feedback.style.color = "green";
    document.getElementById("correctDialogue").style.display = "block";
  } else {
    feedback.textContent = "Деякі відповіді неправильні. Спробуйте ще раз.";
    feedback.style.color = "red";
  }
}
// Цей код знизу відповідає за те щоб робити імена в діалозі жирним шрифтом.
formatDialogue();