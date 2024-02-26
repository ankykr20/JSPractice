// Write a JS program to check if two strings are anagrams of each other.

const areAnagrams = (str1, str2)=>{
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

const result = areAnagrams('care', 'races');

if(result == true)
    console.log(`Both strings are anagrams`);
else
    console.log(`Both strings are not anagrams`);