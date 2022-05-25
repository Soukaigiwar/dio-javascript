function compare_numbers(){
    let number_1 = Number(prompt('Insira o primeiro número:'));
    let number_2 = Number(prompt('Insira o segundo número:'));
    let compare = '';
    let soma;
    let result = [];

    if(number_1 != number_2) {
        compare = 'não são';
    } else {
        compare = 'são';
    }

    soma = number_1 + number_2;

    if(soma === 10)
        result.push('igual');
    else if(soma > 10)
        result.push('maior');
    else
        result.push('menor');

    if(soma === 20)
        result.push('igual');
    else if(soma > 20)
        result.push('maior');
    else
        result.push('menor');

    return alert(`Os números ${number_1} e ${number_2} ${compare} iguais.\nE sua soma é ${soma}, que é ${result[0]} que 10 e ${result[1]} que 20.`);
}
