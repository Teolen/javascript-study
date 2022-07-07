let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let result = document.getElementById("result");

function calc(x) {
    switch(x) {
        case '+': result.value = Number(number1.value) + Number(number2.value);
            break;
            case '-': result.value = number1.value - number2.value;
            break;
            case '*': result.value = number1.value * number2.value;
            break;
            case '/': result.value = number1.value / number2.value;
            break;
            case '**': result.value = number1.value ** number2.value;
            break;
            case "root": result.value = Math.pow(number1.value, 1/number2.value);
            break;
    }
}
function copyResult() {
    number1.value = result.value
    clear(number2);
    clear(result);
}
function clrscr() {
    clear(number1);
    clear(number2);
    clear(result);
}
function clear(element) {
    element.value = "";
}