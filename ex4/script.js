const handleButtonClick = () => {
  const vector = [7, 8, 5, 2, 4, 6, 8, 10, 15, 1];
  const vectorArea = document.getElementById('vector-area');
  const averageArea = document.getElementById('average-area');

  const average =
    vector.reduce((acc, number) => number + acc, 0) / vector.length;

  vectorArea.innerHTML = `Vetor: [${vector}]`;
  averageArea.innerHTML = `Média: ${average}`;
};
