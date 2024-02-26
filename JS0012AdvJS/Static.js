//class
class User{

    //static variable.
    static UserCount = 0;

    //constructor
    constructor(username){
        this.username = username;
        User.UserCount++;
    }

    //static method
    static getUSerCount(){
        console.log(`There are ${this.UserCount} user online.`)
    }

    //non-static method
    sayHello(){
        console.log(`Hello, My name is ${this.username}`);
    }
}

const user1 = new User("alice");
const user2 = new User("Bob");
user1.sayHello();
user1.sayHello();