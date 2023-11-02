const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.pop() - Remove o último elemento de um array e retorna aquele elemento removido
    Não há nenhum parametro.
*/

const arrayPop = estudantes.pop();
console.log(arrayPop);
// Retorna Laura Rodrigues, que era o ultimo elemento do array e que foi removido.