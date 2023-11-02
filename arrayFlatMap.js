const notas = [
    {
        data: '2023-10-31',
        itens: [
            { conta: '2143', valor: 200 },
            { conta: '2111', valor: 500 }
        ]
    },
    {
        data: '2023-07-12',
        itens: [
            { conta: '2222', valor: 120 },
            { conta: '2143', valor: 280 }
        ]
    }, 
    {
        data: '2023-02-02',
        itens: [
            { conta: '2143', valor: 110 },
            { conta: '7777', valor: 390 }
        ]
    },     
];

/* Array.flatMap() - Realiza um map sobre uma coleção de dados, retornando o array com um nível apenas. 
   1º parametro - Elemento atual que está sendo processado no array.
   2º parametro - Posição (index) do elemento no array. (Opcional)
   3º parametro - É a propria lista (matriz) array. Geralmente não é tão utilizado. (Opcional)
*/

const arrayFlatMap =  notas
.flatMap(nota => nota.itens)
.filter(item => item.conta == '2143')
.reduce((total, item) => total + item.valor, 0);

console.log(arrayFlatMap);

