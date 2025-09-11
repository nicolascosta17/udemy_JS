const nomeCliente = "Luis Otávio";
const sobrenomeCliente = "Miranda";
const idadeCliente = 30;
const pesoCliente = 84;
const alturaCliente = 1.8;
const anoDeNascimento = 1994;

let IMC = pesoCliente / (alturaCliente**2)

console.log(`${nomeCliente} ${sobrenomeCliente} tem, ${idadeCliente} anos, pesa ${pesoCliente} kg tem, ${alturaCliente} de altura e seu IMC é de, ${IMC} `)
console.log(`${nomeCliente} nasceu em ${anoDeNascimento}`)