const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mybtn").onclick = function(){
    radius = document.getElementById("myrad").value;
    console.log(radius);
    circumference = 2 * PI * radius;
    document.getElementById("res").textContent = `The cricumference of circle having ${radius} is ${circumference}`;
}