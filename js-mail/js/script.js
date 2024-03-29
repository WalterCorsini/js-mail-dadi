
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
    result = false;

//LOGIC

    // check in arrayemail
    for(let i = 0; i <= arrayEmail.length && result === false && stringMail !== ""; i++){
        // if input mail is the same result = true;
        if(stringMail === arrayEmail[i] ){
            result = true;
        }
    }

// OUTPUT
    if(result === true){
        document.getElementById("result").innerHTML = `<span class="ok"> Registrato </span>`;
    } else if( result === false && stringMail !== ""){
        document.getElementById("result").innerHTML = `<span class="wrong"> Non Registrato </span>`;
    } else{
        document.getElementById("result").innerHTML = `<span class="empty"> Campo Vuoto. Inserisci email</span>`;
    }
    document.getElementById("email").value = "";
})


    