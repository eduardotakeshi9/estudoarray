const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.copyWithin() - Copia parte de um array para outra localização no mesmo array e sem alterar o tamanho do aray.
   1º parametro - Indice no qual começa o novo array. For 0, começa do começo do array, se for numero negativo começa do fim do array. 
   2º parametro - Indice no qual começa a cópia dos elementos. (Opcional)
   3º parametro - Indice no qual termina a cópia dos elementos. Caso não passe esse parametro, o 2º parametro começara do indice indicado e vai terminar até percorrer todo array. (Opcional)
*/

const arrayCopyWithin = estudantes.copyWithin(0, 1, 4);
console.log(arrayCopyWithin);
// Retorna um novo array chamado arrayCopyWithin que será José, Beatriz, Laura e Laura. Porque copiou do indice 1 até o 4 (não chega ao  indice 4, vai até o 4 só) e essa cópia começa do indice 0 até comleta-lá.


