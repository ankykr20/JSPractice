//Write a function to check if a given string is a palindrome.

const checkPalindrome = (str) =>{
    return str.split('').reverse().join('');
}

let str = "MADAM";
const revString = checkPalindrome(str);

if(str == revString)
    console.log("String is Palindrome.");
else
    console.log("String is not Palindrome.");