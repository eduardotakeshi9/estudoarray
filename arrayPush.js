const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.push() - Adiciona 1 ou mais elementos ao final do array. Contudo, caso peça um console.log do Array.push, o valor retornado será o comprimento do array, ou seja, o array.length. Os elementos adicionados só poderão ser vistos no console.log do array trabalhado. 
   1º parametro - Valor 1.
   2º parametro - Valor 2.
   ...
   Nº parametro - Valor N.
*/

const arrayPush = estudantes.push(
    { nome: "Guilherme Nobre", idade: 22, altura: 1.80, sexo: "Masculino", materia: "React Native", valor: 200 }
)
console.log(estudantes);
// Retorna o array estudantes com novo aluno, adicionado no ultimo elemento do array.