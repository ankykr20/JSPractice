/*
    Element Selector.: Methods used to target and manipulate HTML elements.
                       They allow us to select one or multiple HTML elements from the DOM(Document Object Model).

        
    1.document.getElementById()                       //Element or NULL
    2.document.getElementsByClassName()               //HTML Collection
    3.document.getElementsByTagName()                 //HTML COllection
    4.document.querySelector()                        //Element or Null
    5.document.querySelectorAll()                     //NodeList.    
*/

/*
------------1.document.getElementById()-----------
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

*/
/*
------------2.document.getElementsByClassName()-----------

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";
*/


/*
------------3.document.getElementsByTagName()-----------

const h1Elements = document.getElementsByTagName("h1");
const liElements = document.getElementsByTagName("li");


for(let h1Element of h1Elements){
    h1Element.style.backgroundColor = "Orange";
}

for( let liElement of liElements){
    liElement.style.backgroundColor = "green";
}
*/

/*
------------4.document.querySelector()-----------

const element = document.querySelector("h1");
element.style.backgroundColor = "brown";
*/

/*
------------4.document.querySelector()-----------
*/
const element = document.querySelectorAll("h1");

element.forEach(h1element => {
    h1element.style.backgroundColor = "brown";
});

const elements = document.querySelector("div");

elements.forEach()