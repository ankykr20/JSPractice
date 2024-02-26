// Write a function that takes a sentence as a parameter and returns the longest word in it.
  
const findLongestWord = (sentence) =>{
    const words = sentence.split(' ');
    
    const longestWord = words.reduce((longest, current)=>{
            return current.length > longest.length ? current : longest;
    }, '');   
    return longestWord;
}

const LongestWord = findLongestWord("I am Ankit kr.");
console.log("Longest word.: " + LongestWord);