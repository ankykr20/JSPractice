const arr = [5, 10, 3, 4, 8];

//Double = 10, 20, 6, 8, 16

//triple = 15, 30, 9, 12, 24

//binary = 

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}


const output = arr.map(triple);

console.log(output);