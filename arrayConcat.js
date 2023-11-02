const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

const estudantes2 = [
    { nome: "Claudia Valentino", idade: 28, altura: 1.62, sexo: "Feminino", materia: "React Native", valor: 200 },
]

/* Array.concat() - Mescla dois ou mais arrays. Não altera os arrays já existentes, retorna um novo array. 
   1º parametro - Valor 1.
   2º parametro - Valor 2.
   ...
   Nº parametro - Valor N.
*/

const arrayConcat = estudantes.concat(estudantes2);
console.log(arrayConcat);
// Retorna um novo array chamado arrayConcat que juntou tanto o estudantes e o estudantes2.