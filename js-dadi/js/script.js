//serch button 
const sendBtnElem = document.getElementById("send-btn"); // object | null

// declaration variable
let dadiPc = 0;
let dadiUser = 0;
let result = 0

// eventlistener Click button
sendBtnElem.addEventListener("click", function(){
    // save input mail to variable
    dadiPc = Math.floor(Math.random() * 6 + 1);
    dadiUser = Math.floor(Math.random() * 6 + 1);
    console.log(dadiPc, "dadi pc");
    console.log(dadiUser, "dadi user");

    if(dadiPc > dadiUser){
        result = 1;
    } else if(dadiUser > dadiPc) {
        result = 2;
    } else {
        result = 0;
    }
    document.getElementById("dadi-pc").innerHTML = "DADO DEL COMPUTER  " + dadiPc;
    document.getElementById("dadi-user").innerHTML = "IL TUO DADO  " + dadiUser;
// OUTPUT
    if(result === 1){
        document.getElementById("result").innerHTML = "HAI PERSO"
    } else if(result === 2){
        document.getElementById("result").innerHTML = "HAI VINTO"
    } else{
        document.getElementById("result").innerHTML = "PAREGGIO"
    }
})
