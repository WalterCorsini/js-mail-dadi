
//INPUT

// array email
const arrayEmail = ["pippo@pippo.it", "pluto@pippo.it, paperino@pippo.it"]

//serch button 
const sendBtnElem = document.getElementById("send-btn"); // object | null

// declaration variable
let stringMail;
let result = false;

// eventlistener Click button
sendBtnElem.addEventListener("click", function(){
    // save input mail to variable
    stringMail = document.getElementById("email").value; //string

//LOGIC

    // check in arrayemail
    for(let i = 0; i <= arrayEmail.length && result === false; i++){
        // if input mail is the same result = true;
        if(stringMail === arrayEmail[i] ){
            result = true;
        }
    }

// OUTPUT
    if(result === true){
        document.getElementById("result").innerHTML = "Registrato";
    } else {
        document.getElementById("result").innerHTML = "Non egistrato";
        
    }
})


    