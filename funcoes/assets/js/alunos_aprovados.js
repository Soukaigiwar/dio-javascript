/*

1 - Crie uma função que recebe o array alunos e um número que irá representar a média final;

2 - Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;

3 - Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

*/
var alunos  = [];
var notas   = [];

const qtd = prompt("Quantos alunos:");

const Alunos = { function(qtd = 0){
    let i = 0
    do {
        alunos.push(prompt(`Digite o nome do aluno ${i + 1}:`));
        notas.push(prompt(`Digite a nota do aluno ${i + 1}:`));
    }
    while(++i < qtd);
}};

add_aluno(qtd);

alunos.forEach(console.log(alunos));
