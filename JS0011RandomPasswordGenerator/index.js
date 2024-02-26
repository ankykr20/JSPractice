
function generatePassword(length, includeLowercase,includeUpperCase,includeNumber, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";;
    const numberChars = "0123456789";
    const symbolChars = "!@#$^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(Password length must be at least 1.)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }
    for(let i = 0; i <length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeUpperCase,
                                includeNumber,
                                includeSymbols);

console.log(`Generated Password.: ${password} `);