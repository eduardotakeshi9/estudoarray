const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.map() - Invoca uma função callback  Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. 
   1º parametro - Elemento atual que está sendo processado no array.
   2º parametro - Posição (index) do elemento no array. (Opcional)
   3º parametro - É a propria lista (matriz) array. Geralmente não é tão utilizado. (Opcional)
*/

const arrayMap = estudantes.map(aluno => aluno.idade);
console.log(arrayMap);
// array [ 23, 22, 26, 24 ]