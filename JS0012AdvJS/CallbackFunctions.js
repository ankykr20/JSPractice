//Simple calculator for practicing javascript callback function..

//Here sum is a callback function.
function sum(a, b){
    return (a + b);
}

//Here diff is a callback function..
const diff = (a, b) => {  //Arrow Function.
    return (a - b);
}

//here calculator is the main function..
function calculate(num1, num2, callbackFN){
   let res = callbackFN(num1, num2);
    return res;
}

let resultSum = calculate(11, 15, sum);
console.log(`Sum .: ${resultSum}`);
document.getElementById("sum").innerHTML = `Addition.: ${resultSum}`;


let resultdiff = calculate(20, 15, diff)
console.log(`Difference.: ${resultdiff}`);
document.getElementById("diff").textContent = `Substraction.: ${resultdiff}`;