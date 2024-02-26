
function printdata(){
    const fname = document.getElementById("fname").value;
    
    const lname = document.getElementById("lname").value;
  
    const fathername = document.getElementById("fathername").value;

    const mothername = document.getElementById("mothername").value;
    
    const currdesg = document.getElementById("currdesg").value;
    
    
    const currSal = document.getElementById("currSal").value;
    
    const phno = document.getElementById("phno").value;
    
    const aadhar  = document.getElementById("aadhar").value;
    
    const pan = document.getElementById("pan").value;
    
    const gender = document.getElementById("gender").value;
    
    const city = document.getElementById("city").value;
    
    const state = document.getElementById("state").value;
    
    const country = document.getElementById("country").value;

    const pin = document.getElementById("pin").value;
    
    


    // ----------------------
    
    document.getElementById("f_name").innerHTML = fname;
    document.getElementById("l_name").textContent = lname;
    document.getElementById("father_name").textContent = fathername ;
    document.getElementById("mother_name").textContent = mothername;
    document.getElementById("curr_desg").textContent = currdesg;
    document.getElementById("curr_Sal").textContent = currSal;
    document.getElementById("ph_no").textContent = phno;
    document.getElementById("Aadhar_no").textContent = aadhar;
    document.getElementById("pan_no").textContent = pan;
    document.getElementById("gender_no").textContent = gender;
    document.getElementById("city_no").textContent = city;
    document.getElementById("state_no").textContent = state;
    document.getElementById("country_no").textContent = country;
    document.getElementById("pin_no").textContent = pin;

    // console.log(fname);
    // document.write(lname);
    // document.write(fathername);
    // document.write(mothername);
    // document.write(currdesg);
    // document.write(currSal);
    // document.write(phno);
    // document.write(aadhar);
    // document.write(pan);
    // document.write(gender);
    // document.write(city);
    // document.write(state);
    // document.write(country);
    // document.write(pin);
  //  document.write(submitBtn);
}
