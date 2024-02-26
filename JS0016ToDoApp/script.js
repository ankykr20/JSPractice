const inputBox = document.getElementById("inputBox");
const button = document.getElementById("button");
const listContainer = document.getElementById("listContainer");


function addElement(){

    let tr = document.createElement("tr")
    let td = document.createElement("td")

    td.innerHTML = inputBox.value;
    tr.appendChild(td)


    listContainer.append(tr);
    console.log(tr)

   
}
