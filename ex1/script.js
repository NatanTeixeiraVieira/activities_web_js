const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstNumber = Number(document.getElementById('first-number').value);
  const secondNumber = Number(document.getElementById('second-number').value);
  const responseArea = document.getElementById('response-area');
  const baseMessage = 'O maior número é:';

  if (firstNumber - secondNumber > 0) {
    responseArea.innerHTML = `${baseMessage} ${firstNumber}`;
    return;
  }

  if (firstNumber - secondNumber < 0) {
    responseArea.innerHTML = `${baseMessage} ${secondNumber}`;
    return;
  }

  responseArea.innerHTML = 'Os número são iguais';
});
