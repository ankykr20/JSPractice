 
// let fruits = ["apple", "banana", "orange"];
// let vegs = ["carrot", "Potato", "Onion"];
// fruits.pop();
// let foods = [...fruits, ...vegs, "Milk", "Juice"];

// console.log(foods[0]);

//============================================================
//rest parameter..

//creating a function that takes rest Parameters(...rest)
function getSum(...numbers){
    //console.log(numbers);
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAvg(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/2 ;
}

const totSum = getSum(10, 22, 33, 44, 55);
const totAvg = getAvg(12, 24, 36, 46, 56);

console.log(totSum);
console.log(totAvg);