const frutas = ["banana", "maça", "kiwi"];

/* Array.keys() - Retorna um novo objeto iterador de array que contém as chaves para cada índice do array. 
    Não há nenhum parametro.
*/

const arrayKeys1 = frutas.keys();
console.log(arrayKeys1);
// Retorna Object [Array Iterator] {}. Para ter o índice que buscamos, é preciso transformar em objeto.

const arrayKeys2 = Object.keys(frutas);
console.log(arrayKeys2);
// Retorna os índices que buscamos ["0", "1", "2"].