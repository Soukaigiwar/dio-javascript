/*
1 - Crie uma função que recebe o array alunos e um número que irá representar a média final;
2 - Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3 - Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

alert('Já temos alunos cadastrados com as notas, precisamos saber a média que vai aprová-los.')
var finalAvg = prompt("Qual a nota média desejada?");
var students = [
    {
        name: 'sergio', 
        grade: 2
    },
    {
        name: 'henrique', 
        grade: 10
    },
    {
        name: 'mello', 
        grade: 5
    },
    {
        name: 'antonio', 
        grade: 6
    },
    {
        name: 'helena', 
        grade: 8
    },
    {
        name: 'Jordana', 
        grade: 8
    },
    {
        name: 'melissa', 
        grade: 9
    }
];

function evalStudent(studentsArray, avgGrade){
    let passedOn = [];

	for(let i = 0; i < studentsArray.length; i++){
		const {grade, name} = studentsArray[i];
		if(grade >= avgGrade)
			passedOn.push(name)
	}
	return passedOn;
}

console.log(evalStudent(students, finalAvg));
