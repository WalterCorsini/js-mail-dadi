"use strict";
// declaration array and variable
const dayText = ["Lunedi", "Martedi", "Mercoledi",
"Giovedi", "Venerdi", "Sabato", "Domenica"]
const nameSaint = ["San Mourinho", "San Diego Milito", "San Wesley Sneider", "San Douglas Maicon", "San Walter Samuel", "San Julio Cesar", "San Javier Zanetti", "San Thiago Motta", "San Esteban Cambiasso", "San Rodrigo Palacio", "San Massimo Moratti", "San Ricardo Quaresma", "San Marko Arnautovic", "San David Suazo", "San Amantino Mancini", "San Lucio", "San Christian Chivu", "San Goran Pandev", "San Samuel Eto'o", "San Rene Khrin", "San Giulio Donati", "Alen Stevanovic", "San Davide Santon", "San McDonald Mariga", "San Paolo Orlandoni", "San Nicolas Burdisso", "San Marco Materazzi", "San Ivan Cordoba", "San Dejan Stankovic", "San Sulley Muntari", "San Patrick Vieira", "San Mario Balotelli"]
let calendar = "";
//  d = 4 ,because March starts on Friday
let d = 4;


// LOGIC
for(let i = 1; i<=31; i++, d++){
    if(d < 6){
        console.log(i, dayText[d]);
        calendar += `
        <div class="box-day">
            <span class="daytext">${dayText[d]}</span>
            <span class="daynumber">${i}</span>
            <span class="namesaint">${nameSaint[i]}</span>
        </div> `;
    } else if (d == 6){
        console.warn(i, dayText[d]);
        calendar += `
        <div class="box-day text-red">
            <span class="daytext">${dayText[d]}</span>
            <span class="daynumber">${i}</span>
            <span class="namesaint">${nameSaint[i]}</span>
        </div> `;
    } else {
        d = 0;
        console.log(i,dayText[d]);
        calendar += `
        <div class="box-day">
            <span class="daytext">${dayText[d]}</span>
            <span class="daynumber">${i}</span>
            <span class="namesaint">${nameSaint[i]}</span>
        </div> `;
    }

}
// OUTPUT
document.querySelector(".calendar").innerHTML = calendar