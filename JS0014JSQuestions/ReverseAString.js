//Write a function that takes a string as input and returns the string reversed.


const reverseString = (str) => {
    return str.split('').reverse().join('');
}

let revStr = reverseString("Anky");
console.log(revStr);