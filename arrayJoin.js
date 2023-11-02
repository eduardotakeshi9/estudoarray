const exemploArray = [1, 2, 3];

/* Array.join() - Junta todos os elementos de um array e lista no formato de string. 
   1º parametro - Uma string para separar cada par de elementos do array. Se omitido, os elementos serão separados por virgula. (Opcional)
*/

const arrayJoin = exemploArray.join("-");
console.log(arrayJoin);
// Retorna 1-2-3