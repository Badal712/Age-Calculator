const btnEl = document.getElementById("btn");
const bdEl = document.getElementById("birthday");
const resultEl = document.getElementById("result")

function calculateAge(){ //Creating a function

    const bdValue = bdEl.value; //Assigning the Birthady value
    console.log(bdValue);
    if(bdValue == "") { //creating a condition
        alert("Please enter your Date of Birth")
    }
    else {
        const age = getAge(bdValue);
    }
    resultEl.innerText = `You are ${fAge} years old`
} //End of this function

function getAge(bdValue){
    var dt = new Date();
    cYear = dt.getFullYear(); //Collecting the current year
    cMonth = dt.getMonth(); //collecting the current month
    cDate = dt.getDate(); //collecting the current date
    var bd = new Date(bdValue);
    bdYear = bd.getFullYear() //collecting the birth of year
    bdMonth = bd.getMonth(); //collecting the birth of month
    bdDate = bd.getDate();  //collecting the birth of date
    alert(cDate);
    fYear = (cYear*365)-(bdYear*365);
    fAge = parseInt(fYear/365);

    if(cMonth<0 ||cMonth==0 && cDate<bdDate) {
        fAge --;
        
    }
    
    
    return fAge;
}


btnEl.addEventListener("click", calculateAge);