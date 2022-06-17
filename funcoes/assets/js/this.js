// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
// Crie seus próprios objetos para esta atividade!

const person1 = {
    name: 'Sergio',
    age: 40
};

const person2 = {
    name: 'henrique',
    age: 35
};

const person3 = {
    name: 'antonio',
    age: 16
};

const person4 = {
    name: 'helena',
    age: 1
};

function calculaIdade(year) {
	return `Daqui a ${year} anos, ${this.name} terá ${
		this.age + year
	} anos de idade.`;
};

console.log(calculaIdade.call(person2, 5));
console.log(calculaIdade.apply(person4, [4]));
