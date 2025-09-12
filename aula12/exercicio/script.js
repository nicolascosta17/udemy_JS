let varA = "A"; // Tenha o valor de B
let varB = 'B'; // Tenha o valor de C
let varC = 'C'; // Tenha o valor de A

// Criar uma nova variável

const varD = varA

varA = varB
varB = varC
varC = varD

console.log(varA, varB, varC);

// Sem criar uma variável

varA = "A"; // Tenha o valor de B
varB = 'B'; // Tenha o valor de C
varC = 'C'; // Tenha o valor de A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
