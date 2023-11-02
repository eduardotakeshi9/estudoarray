const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.slice() - Retorna uma cópia de um array a partir de um subarray criado entre as posições início e fim de um array original.  Conta a partir do array.length.
   1º parametro - Começa uma posição pós indicada, tomando base o array.length. Se o array.length é 5 e o parametro passado foi 2, retorna o novo array a partir do 3.
   2º parametro - Termina exatamente na posição indicada, tomando base o array.length. Se o array.length é 5 e o parametr passado foi 4, retorna um novo array até a posição 4.
*/

const arraySlice = estudantes.slice(1, 4);
console.log(arraySlice);
// Retorna José Carlos (posição 1), Beatriz Alencar (posição 2) e Laura Rodrigues (posição 3).