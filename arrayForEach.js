const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.forEach() - Executa uma função fornecida uma vez para cada elemento do arary
   1º parametro - Elemento atual que está sendo processado no array.
   2º parametro - Posição (index) do elemento no array. (Opcional)
   3º parametro - É a propria lista (matriz) array. Geralmente não é tão utilizado. (Opcional)
*/

function verificarMateria(e, m) {
    console.log(`O estudante ${e} está matriculado na materia de ${m}`);
}

const arrayForEach = estudantes.forEach((aluno, posicao, array) => {
     verificarMateria(aluno.nome, aluno.materia);
     console.log(`Sua posição no array é de: ${posicao}`);
})

console.log(arrayForEach);
// Retorna cada nome de estudante matriculado na materia especifica, juntamente com sua posição index.
