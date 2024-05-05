const handleSumMatrix = () => {
  const matrix = [
    [15, 8, 7],
    [12, 3, 21],
    [27, 58, 1],
  ];
  const sumArea = document.getElementById('sum-area');
  const sum = matrix.reduce(
    (acc, row) => row.reduce((rowAcc, number) => number + rowAcc, 0) + acc,
    0,
  );

  sumArea.innerHTML = `Soma: ${sum}`;
};
