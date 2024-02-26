class Product{
    constructor(name,  price){
        this.name = name;
        this.price = price;
    }

    //function.
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: Rs${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.5;
const product1 = new Product("Shirt", 29.22);
const product2 = new Product("Pants", 35.50);

product2.displayProduct();


const total = product2.calculateTotal(salesTax);
console.log(`Total price (with Tax): Rs${total.toFixed(2)}`);