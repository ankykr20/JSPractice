function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function(){
        console.log(`You are driving ${this.model}`);
    }
}

const car1 = new Car("Ford", "Mustang", 2024,"red");
const car2 = new Car("Mercedes", "maybach", 2024, "blue");
const car3 = new Car("Volksvagan", "Lamborghini", 2026, "yellow");

console.log(car1.make);
console.log(car2.model);
console.log(car3.color);

car2.drive();