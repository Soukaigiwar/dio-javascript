/*

1 - Crie uma função que recebe o array alunos e um número que irá representar a média final;

2 - Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;

3 - Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

*/

// var studentQtd = Number(prompt("Quantos alunos vai incluir?"));
var finalAvg = prompt("Qual a nota média desejada?");
var students = [
    ['sergio', 2],
    ['henrique', 7],
    ['antonio', 8],
    ['helena', 6],
    ['jordana', 4]
];
// var studentAverage = Array(Number(studentQtd));

function evalStudent(){
    console.log(students);
}

students.forEach(evalStudent());

// for (i = 0; i < students.length; i++){
//     students[i] = prompt(`Digite o nome do aluno ${i + 1}: `);
//     console.log(students[i]);
// }

// for (i = 0; i < studentAverage.length; i++){
//     students[i] = prompt(`Digitea nota do aluno ${students[i]}: `);
//     console.log(students[i]);
// }
//    students[index] = prompt(`Digite o nome do aluno ${index + 1}: `);
//    console.log(students);




// studentsAndAvg(3, 6);
// var alunos  = [];
// var notas   = [];

// const qtd = prompt("Quantos alunos:");

// console.log(qtd)

// //return;

// const Alunos = { function(){
//     let i = qtd;
//     do {
//         alunos.push(prompt(`Digite o nome do aluno ${i - 1}:`));
//         notas.push(prompt(`Digite a nota do aluno ${i - 1}:`));
//     }
//     while(--i > 0);
// }};

// add_aluno(qtd);

// alunos.forEach(console.log(alunos));
