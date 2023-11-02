const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.reduce() -  Retorna um valor que é o resultado acumulado de cada elemento do array.
reduce(callBackFn, initialValue).

callBackFn
1º parametro (accumulator) - O valor retornado.
2º parametro (currentValue) - O valor do elemento do array.
3º parametro (currentIndex) - Índice do elemento do array. (Opcional)
4º parametro (array) - O array que a função reduce foi chamada. (Opcional)

initialValue - Valor a ser usado como acumulador para a primeira chamada do callBackFn. (Opcional)

Exemplo de como funciona cada parametro do callBackFn. Deixando claro que return value não é um parametro.

                acc         currentValue        currentIndex        array       return value
1º chamada:      0              1                   0              [1, 2, 3]          1
2º chamada:      1              2                   1              [1, 2, 3]          3
3º chamada:      3              3                   2              [1, 2, 3]          6

*/

const initialValue = 0

const arrayReduce = estudantes.reduce((acc, aluno) => {
    return acc + aluno.valor;
}, initialValue)
console.log(arrayReduce);
// 420


