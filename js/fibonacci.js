let inputNumber = document.getElementById("number");
let outputResult = document.getElementById("result");
let lastNumber = document.getElementById("lastNumber");

function fibonacci(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    else  {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
}

function fibonacciRow(n) {

    let result =[];
    for(let i = 0; i < n; i++) {
        if(i === 0) {
            result.push(0);
        }
        else if(i === 1) {
            result.push(1);
        }
        else if (i > 1){
            let num = result[i-1]+result[i-2];
            result.push(num);
        }
    }
    return result;
}

function outFibonacci() {

    let num = inputNumber.value;
    let resultRow = fibonacciRow(num);
    outputResult.innerHTML = resultRow;
    lastNumber.innerHTML = "Last number is <b>" + resultRow.splice(-1) + "</b>";

}