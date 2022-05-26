// Atividade 1
// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo

let palavra_um      = "raiar";
let palavra_dois    = "ama";

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

function inverse_string(mystring){
    let result_string = "";
    let i = mystring.length;

    while(--i >= 0)
        result_string += mystring[i];

    if(result_string === mystring)
        console.log("É um palíndromo.");
    else
        console.log("Não é um palíndromo.");
}

console.log(inverse_string(palavra_um));
console.log(inverse_string(palavra_dois));
