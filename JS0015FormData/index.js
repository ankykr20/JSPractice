
let submit = document.getElementById("submit");
let showHere = document.getElementById("showHere");
let showHere1 = document.getElementById("showHere1");
let showHere2 = document.getElementById("showHere2");
let showHere3 = document.getElementById("showHere3");

submit.onclick = function(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    showHere.textContent = 'First Name : ' + fname;
    showHere1.textContent = 'Last Name : ' + lname;
    showHere2.textContent = 'Email : ' + email;
    showHere3.textContent = 'Age : ' + age;
}