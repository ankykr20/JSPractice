const student = {
    fname : "anky",
    lname : "Kumar",
    age : "24",
    father_name : "XXXXXXXXX",
    mob : 6202225200,
    add : "hyd"
}

console.log(typeof student.fname);
console.log(student.mob);

document.getElementById("para").innerHTML = `This is ${student.fname} ${student.lname}. I am ${student.age} years old. My father's name is ${student.father_name}. My contact no. is ${student.mob} and I am currently at ${student.add}`; 