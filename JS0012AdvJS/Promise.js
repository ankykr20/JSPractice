//creating a promise..

const ticket = new Promise((resolve, reject) => {
    const isBoarded = false;
    if(isBoarded){
        resolve("You are not in the flight.!");
    }else{
        reject("Your flight has been cancelled.!");
    }
});

ticket 
    .then((data) =>{
        console.log("Wohoo", data);
    })
    .catch((data) =>{
        console.log("oh no", data);
    })
    .finally(() =>{
        console.log("I will always execute.!");
    })