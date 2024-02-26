let cars = ["BMW", "mercedes", "Audi", "Thar", "innova"];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//increasing order
cars.sort();

//decreasing order
cars.sort().reverse();

for(let car of cars){
    console.log(car);
}