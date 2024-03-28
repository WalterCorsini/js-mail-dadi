//serch button 
const sendBtnElem = document.getElementById("send-btn"); // object | null
const resetBtnElem = document.getElementById("reset-btn"); // object | null
// declaration variable
let dadiPc = 0;
let dadiUser = 0;
let result = 0

resetBtnElem.addEventListener("click", function () {
    sendBtnElem.classList.remove("hidden");
    resetBtnElem.classList.add("hidden");
    document.getElementById("dadi-pc").innerHTML = "";
    document.getElementById("dadi-user").innerHTML = "";
    document.getElementById("result").innerHTML = "";

})

// eventlistener Click send button
sendBtnElem.addEventListener("click", function () {
    // reset variable
    sendBtnElem.classList.add("hidden");
    resetBtnElem.classList.remove("hidden");


    document.getElementById("dadi-pc").innerHTML = "";

    // save input mail to variable
    dadiPc = Math.floor(Math.random() * 6 + 1);
    dadiUser = Math.floor(Math.random() * 6 + 1);


    if (dadiPc > dadiUser) {
        result = 1;
    } else if (dadiUser > dadiPc) {
        result = 2;
    } else {
        result = 0;
    }


    // OUTPUT
    // result PC
    for (let i = 1; i <= 6; i++) {
        if (dadiPc == i) {
            document.getElementById("dadi-pc").innerHTML = "<h2>Dado del computer</h2><div class=dado" + dadiPc + "></div>";

        }
    }

    // result USER
    for (let i = 1; i <= 6; i++) {
        if (dadiPc == i) {
            document.getElementById("dadi-user").innerHTML = "<h2>Dado utente</h2><div class=dado" + dadiUser + "></div>";

        }
    }


    if (result === 1) {
        document.getElementById("result").innerHTML = `<h2 class="text-white bg-red">HAI PERSO</h2>`;
    } else if (result === 2) {
        document.getElementById("result").innerHTML = `<h2 class="text-white bg-green">HAI VINTO</h2>`;
    } else {
        document.getElementById("result").innerHTML = `<h2 class="text-white bg-yellow">PAREGGIO</h2>`;
    }
})
