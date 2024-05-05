const handleShowVariableValue = () => {
  const variable = 'g';

  const varValueArea = document.getElementById('var-value-area');

  if (variable !== 'a' && variable !== 'b') {
    varValueArea.innerHTML = 'Outra letra';
    return;
  }

  varValueArea.innerHTML = variable.toUpperCase();
};
