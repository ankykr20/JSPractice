/*
    Objects.:
    ---------
*/

const student1 = { 
    firstName : "An",
    lastName : "ky",
    age : 23,
    experties : "Java",
    add : "hyd",
    fullname : function(){
        console.log(`${this.firstName} + ${this.lastName}`);
    }
}

const student2 = {
    firstName : "John",
    lastName : "Doe",
    age : 27,
    experties : "MERN",
    add : "USA",
}

console.log(`Hi!, this is ${student1.firstName} ${student1.lastName}. 
            I am ${student1.age}'s year old. 
            I have experience in ${student1.experties}.
            I am currently at ${student1.add}`);



console.log(`Hi!, this is ${student1.firstName} ${student1.lastName}. 
            I am ${student2.age}'s year old. 
            I have experience in ${student2.experties}.
            I am currently at ${student2.add}`);