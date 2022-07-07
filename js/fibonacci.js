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
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = fibonacci(i);
    }
    return arr;
}

console.log(fibonacciRow(13));