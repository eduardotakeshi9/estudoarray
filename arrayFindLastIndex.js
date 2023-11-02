const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];


/* arrayFindLastIndex() - Tal qual o array.findIndex(). Retorna o indice do PRIMEIRO elemento array que satisfaz a função  provida, contudo percorrendo o array da ultima posição para a primeira. Se nenhum for achado, retorna -1.
   1º parametro - Elemento atual que está sendo processado no array.
   2º parametro - Posição (index) do elemento no array. (Opcional)
   3º parametro - É a propria lista (matriz) array. Geralmente não é tão utilizado. (Opcional)
*/

function verificaAluno(e) {
    const arrayFindLastIndex = estudantes.findLastIndex(aluno => aluno.materia == e);
    return arrayFindLastIndex;
}

console.log(verificaAluno("JavaScript"));
// Retorna 3, porque foi o primeiro JavaScript que foi encontrado percorrido do final da lista até o começo.