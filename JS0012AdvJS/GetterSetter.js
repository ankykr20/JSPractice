//Class 
class Person{

    //constructor..
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
            this.age = age;
    }

    //setter Method.
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error("First name must be a non-empty String.");
        }
    }

    //setter Method.
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Last name must be a non-empty String.");
        }
    }

    //getter methods.
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}


const person = new Person("john", "Doe", 28);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);