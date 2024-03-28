//serch button 
const sendBtnElem = document.getElementById("send-btn"); // object | null

// declaration variable
let dadiPc = 0;
let dadiUser = 0;
let result = 0

// eventlistener Click button
sendBtnElem.addEventListener("click", function(){
    // reset variable
    document.getElementById("dadi-pc").innerHTML = "";

    // save input mail to variable
    dadiPc = Math.floor(Math.random() * 6 + 1);
    dadiUser = Math.floor(Math.random() * 6 + 1);


    if(dadiPc > dadiUser){
        result = 1;
    } else if(dadiUser > dadiPc) {
        result = 2;
    } else {
        result = 0;
    }


// OUTPUT
    // result PC
    for(let i = 1;  i <= 6; i++){
        if(dadiPc == i){
            document.getElementById("dadi-pc").innerHTML = "<h2>Dado del computer</h2><div class=dado"+dadiPc+"></div>";

        }
}

    // result USER
    for(let i = 1;  i <= 6; i++){
        if(dadiPc == i){
            document.getElementById("dadi-user").innerHTML = "<h2>Dado utente</h2><div class=dado"+dadiUser+"></div>";

        }
}


    if(result === 1){
        document.getElementById("result").innerHTML = "HAI PERSO"
    } else if(result === 2){
        document.getElementById("result").innerHTML = "HAI VINTO"
    } else{
        document.getElementById("result").innerHTML = "PAREGGIO"
    }
})
