const my_string = document.getElementById('testInputArray');
number_of_chars = 6;

function error_handling(number_of_chars){
    try {
        if(my_string.length != number_of_chars){
            console.log("caraculis");
        }
    } catch (error) {
        console.log("caraculis");
    }
    // console.log(`${my_string.value}awefiodADdA`);
}