const factorialForm = document.getElementById('factorial-form');
const factorialArea = document.getElementById('factorial-area');

const calculateFactorial = (number) => {
  if (number === 0) return 1;

  return number * calculateFactorial(number - 1);
};

factorialForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const number = Number(document.getElementById('input-number').value);
  const factorial = calculateFactorial(number);

  factorialArea.innerHTML = `O fatorial de ${number} é ${factorial}`;
});
