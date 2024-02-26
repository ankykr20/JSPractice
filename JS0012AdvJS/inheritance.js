///Inheritance..

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runtime){
        super(name, age);
        this.runtime = runtime;
    }
}

class Swan extends Animal{
    constructor(name, age, swimtime){
        super(name, age);
        this.swimtime = this.swimtime;
    }
}

class Hawk extends Animal{
    constructor(name, age, flytime){
        super(name, age);
        this.flytime = this.flytime;
    }
}

const rabbit = new Animal("rabbit",12,23.3);
console.log(rabbit);