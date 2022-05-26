// Atividade 2
// Troque todos os elementos pares e diferentes de zero
// de um array pelo número 0. Se o array for vazio, retorne -1.

let array_um        = [1, 3, 4, 5, 11, 17, 20, 21, 22, 23, 24, 25];
let array_dois      = [];
let array_tres      = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let array_quatro    = [0, 0, 0, 0, 1, 2];
var result = [];

function even_to_zero(item){
    if(item % 2 == 0 || item == 0)
        item = 0;
    result.push(item);
}

if (array_um.length == 0)
    result = '-1';
else
    array_um.forEach(even_to_zero);

console.log(result);
