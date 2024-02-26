function getCheese(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const cheese = "🧀" 
            resolve(cheese)
        },2000)
    })
}

function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dough = cheese + "🫓"
            resolve(dough)
        }, 2000)
    })
}

function bakePizza(dough){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const pizza = "🍕"
            resolve(pizza)
        }, 2000)
    })
}


async function orderPizza(){
    try{
        const cheese = await getCheese()
        console.log(`Here is the cheese`,cheese)
        
        const dough = await makeDough(cheese)
        console.log(`here is the dough`, dough)

        const pizza = await bakePizza(dough)
        console.log(`Here is the pizza`, pizza)
    }catch(err){
        console.log("Error Occured" + err)
    }
}

orderPizza();