function error_handling() {
    let my_string = document.getElementById('testInputString');
    let len_parameter = document.getElementById('testInputLength');
    let errorLabel = document.getElementById('errorLabel');

    console.log(typeof Object(my_string));
    try {
        if (!my_string.value && !len_parameter.value.trim())
            throw new ReferenceError("Envie os campos preenchidos.");
        if (typeof my_string !== 'object')
            throw new TypeError('Array precisa ser do tipo object.');
        if (isNaN(len_parameter.value) || len_parameter.value.trim() == '')
            throw new TypeError('"Quantos caracteres" precisa ser do tipo número. ');
        if (my_string.value.length !== Number(len_parameter.value))
            throw new RangeError('Tamanho Inválido');
        return errorLabel.innerText = 'Tudo ok por aqui';

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('ReferenceError: ' + error.message)
            errorLabel.innerText = 'ReferenceError: ' + error.message;
        } else if (error instanceof TypeError) {
            console.log('TypeError: ' + error.message)
            errorLabel.innerText = 'TypeError: ' + error.message;
        } else if (error instanceof RangeError) {
            console.log('RangeError: ' + error.message);
            errorLabel.innerText = 'RangeError: ' + error.message;
        } else {
            console.log('Tipo de erro não esperado. ' + error);
            errorLabel.innerText = 'Tipo de erro não esperado. ' + error;
        }
    }
}