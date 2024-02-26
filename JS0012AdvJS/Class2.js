class Car{
    constructor(name){
        this.brand = name;
    }

    present(){
        return 'I have a ' + this.brand;
    }
}

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }
    show(){
        this.present() + ', it is a ' + this.model
    }
}

const myCar = new Model("Hero Honda", "Splendor");
console.log(myCar.show());