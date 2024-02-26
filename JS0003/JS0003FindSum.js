let x;
let y;
let z;

function mySum(){
    x = document.getElementById("f1").value;
    x = Number(x);
    y = document.getElementById("s1").value;
    y = Number(y);
    z = x + y;
    document.getElementById("res").textContent=`Sum of ${x}, ${y} is ${z}`;
}