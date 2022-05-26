// Atividade 1
// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo

let palavra_um      = "raiar";
let palavra_dois    = "nada";

// Maneira 1:

function is_palindrome(my_string){
    if(my_string === my_string.split("").reverse().join(""))
        return console.log("É um palíndromo.");
    else
        return console.log("Não é um palíndromo.");
}

console.log(is_palindrome(palavra_um));
console.log(is_palindrome(palavra_dois));

// Maneira 2:

function inverse_string(received_string){
    let result_string = "";
    let i = received_string.length;

    while(--i >= 0)
        result_string += received_string[i];

    if(result_string === received_string)
        console.log("É um palíndromo.");
    else
        console.log("Não é um palíndromo.");
}

console.log(inverse_string(palavra_um));
console.log(inverse_string(palavra_dois));
