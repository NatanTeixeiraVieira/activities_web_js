const showBiggestNumber = () => {
  const biggestNumberArea = document.getElementById('biggest-number-area');
  const vector = [2, 8, 14, 25, 4, 7, 8, 18, 0, -57];

  biggestNumberArea.innerHTML = `O maior número do vetor [${vector}]`;
  const biggestNumber = vector.sort((a, b) => a - b).at(-1);
  biggestNumberArea.innerHTML += ` é ${biggestNumber}`;
};
