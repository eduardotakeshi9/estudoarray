const estudantes = [
    { nome: "Ana Maria", idade: 23, altura: 1.50, sexo: "Feminino", materia: "JavaScript", valor: 120 },
    { nome: "José Carlos", idade: 22, altura: 1.75, sexo: "Masculino", materia: "PHP", valor: 100 },
    { nome: "Beatriz Alencar", idade: 26, altura: 1.60, sexo: "Feminino", materia: "CSS", valor: 80 },
    { nome: "Laura Rodrigues", idade: 24, altura: 1.58, sexo: "Feminino", materia: "JavaScript", valor: 120 },
];

/* Array.splice() - Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. Contudo, caso peça um console.log do Array.splice() será mostrado []. Os elementos adicionados só poderão ser vistos no console.log do array trabalhado.
   1º parametro - Adiciona o número de elementos informado.
   2º parametro - Remove o número de elementos informado.
   3º parametro - Elemento que vai ser adiciionado. 
   4º parametro - Elemento que vai ser adiciionado.
   ...
   Nº parametrto - Elemento que vai ser adicionado.
*/

const arraySplice = estudantes.splice(
    1,  // Adicionou
    0,  // Removeu
    { nome: "Gabriela Nobre", idade: 21, altura: 1.57, sexo: "Feminino", materia: "React Native", valor: 200 }
)

console.log(estudantes);
// Retorna Gabriela Nobre, que agora está no indice 1 do array.
