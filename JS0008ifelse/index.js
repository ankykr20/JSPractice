//Taking age object from input text and storing in "myage" variable.
const myage = document.getElementById("myage");

//Taking btn id and storing in "myBtn" variable so that we can make button perform for correspondence task.
const myBtn = document.getElementById("myBtn");
//Taking the id of h1 tag so that the output print there.
const result = document.getElementById("result");

//declaring a variable "age".
let age;

//on clicking button a function will perform
myBtn.onclick = function(){
    
    //storing value in age
    age = myage.value;
    // converting to number type
    age = Number(age);
    
    if(age >= 100){
        alert(`You are to old to enter the site.`);
        // result.textContent = `You are to old to enter the site.`;
    } else if(age == 0){
        alert(`You can't enter. You have just born.`);
        // result.textContent = `You can't enter. You have just born.`;
    }else if(age >= 18){
        result.textContent = `You are old enough to enter this site.! Welcome`;
    }else if(age <=0 ){
        alert(`Your age can't be zero.`);
        // result.textContent = `Your age can't be zero.`;
    }else{
        alert(`You must be 18+ to enter the site.`);
        // result.textContent = `You must be 18+ to enter the site.`;
    }

}