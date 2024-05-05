const generateRandomValue = () => Math.round(Math.random() * 100);

const handeShowMatrixAverage = () => {
  const matrixAverageArea = document.getElementById('matrix-average-area');

  const matrix = [
    [generateRandomValue(), generateRandomValue(), generateRandomValue()],
    [generateRandomValue(), generateRandomValue(), generateRandomValue()],
    [generateRandomValue(), generateRandomValue(), generateRandomValue()],
    [generateRandomValue(), generateRandomValue(), generateRandomValue()],
  ];

  const matrixSum = matrix.reduce(
    (acc, row) => row.reduce((rowAcc, number) => number + rowAcc, 0) + acc,
    0,
  );
  console.log('🚀 ~ handeShowMatrixAverage ~ matrixSum:', matrixSum);

  const matrixLength = matrix.flat().length;
  console.log('🚀 ~ handeShowMatrixAverage ~ matrixLength:', matrixLength);

  const matrixAverage = (matrixSum / matrixLength).toFixed(2);

  matrixAverageArea.innerHTML = `A média da matriz é ${matrixAverage}`;
};
