let outputId = document.getElementById("outputId")
let outputpwd = document.getElementById("outputpwd")

function IdPass(){

    let email = document.getElementById("email").value
    let pwd = document.getElementById("pwd").value

    outputId.textContent = email.value
    outputpwd.textContent = pwd.value

    console.log(email)    
    console.log(pwd)
    
}