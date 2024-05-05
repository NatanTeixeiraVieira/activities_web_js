const gradeForm = document.getElementById('grade-form');

gradeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const grade = Number(document.getElementById('grade-input').value);
  const gradeArea = document.getElementById('grade-area');

  if (grade < 6) {
    gradeArea.innerHTML = 'Reprovado';
  } else if (grade >= 6 && grade < 8) {
    gradeArea.innerHTML = 'Aprovado';
  } else {
    gradeArea.innerHTML = 'Aprovado com louvor';
  }
});
