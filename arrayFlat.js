const listaQualquer = [
    [1, 2, 3, 4],
    [2, 4, 6, 8],
    [3, 6, 9, 12]
];

/* Array.flat() - Cria um novo array com todos os elementos em um mesmo nível de array.
    1º Parametro - Nível de profundidade que especifica o nivelamento de uma estrutura array. O padrão do nível é 1. (Opcional)
*/

const arrayFlat = listaQualquer.flat();
console.log(arrayFlat)
console.log(listaQualquer);
// Retorna o array com todos os elementos no mesmo nível.