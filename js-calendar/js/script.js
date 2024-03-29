"use strict";
// declaration array and variable
const dayName = ["Lunedi", "Martedi", "Mercoledi",
"Giovedi", "Venerdi", "Sabato", "Domenica"]
const monthName = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
const monthNumber = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const nameSaint = ["San Mourinho", "San Diego Milito", "San Wesley Sneider", "San Douglas Maicon", "San Walter Samuel", "San Julio Cesar", "San Javier Zanetti", "San Thiago Motta", "San Esteban Cambiasso", "San Rodrigo Palacio", "San Massimo Moratti", "San Ricardo Quaresma", "San Marko Arnautovic", "San David Suazo", "San Amantino Mancini", "San Lucio", "San Christian Chivu", "San Goran Pandev", "San Samuel Eto'o", "San Rene Khrin", "San Giulio Donati", "Alen Stevanovic", "San Davide Santon", "San McDonald Mariga", "San Paolo Orlandoni", "San Nicolas Burdisso", "San Marco Materazzi", "San Ivan Cordoba", "San Dejan Stankovic", "San Sulley Muntari", "San Patrick Vieira", "San Mario Balotelli"]
let calendar = "";
//  contDayName = 4 ,because March starts on Friday
// let contDayName = 4;
let contDayName = 0;
let contMonth = 0;


// LOGIC

for(let i = 0; i <= monthNumber[contMonth]; i++, contDayName++){
    if(i === monthNumber[contMonth] && contMonth <= 11){
        if(contMonth == 0){
            document.querySelector(".gennaio").innerHTML = calendar; 
        } else if(contMonth == 1){
            document.querySelector(".febbraio").innerHTML = calendar; 
        } else if(contMonth == 2){
            document.querySelector(".marzo").innerHTML = calendar; 
        } else if(contMonth == 3){
            document.querySelector(".aprile").innerHTML = calendar; 
        } else if(contMonth == 4){
            document.querySelector(".maggio").innerHTML = calendar; 
        } else if(contMonth == 5){
            document.querySelector(".giugno").innerHTML = calendar; 
        } else if(contMonth == 6){
            document.querySelector(".luglio").innerHTML = calendar; 
        } else if(contMonth == 7){
            document.querySelector(".agosto").innerHTML = calendar; 
        } else if(contMonth == 8){
            document.querySelector(".settembre").innerHTML = calendar; 
        } else if(contMonth == 9){
            document.querySelector(".ottobre").innerHTML = calendar; 
        } else if(contMonth == 10){
            document.querySelector(".novembre").innerHTML = calendar; 
        } else if(contMonth == 11){
            document.querySelector(".dicembre").innerHTML = calendar;
            contMonth = 12;
        }
        contMonth += 1;
        i = 0;
        calendar = "";
    }
    if(contDayName < 6 && contMonth <= 11){
        console.log(dayName[contDayName]);
        calendar += `
            <div class="box-day">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div> `;
    }else if (contDayName === 6 && contMonth <= 11){
        console.log(dayName[contDayName], i+1, monthName[contMonth]);
        calendar += `
            <div class="box-day text-red">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div> `;
    } else if(contDayName == 7 && contMonth <= 11){
        contDayName = 0;
        console.log(dayName[contDayName], i+1, monthName[contMonth]);
        calendar += `
            <div class="box-day">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div> `;
    }

}


// for(let i = 1; i<=31; i++, contDayName++){
//     if(contDayName < 6){
//         console.log(i, dayName[contDayName]);
//         calendar += `
//         <div class="box-day">
//             <span class="daytext">${dayName[contDayName]}</span>
//             <span class="daynumber">${i}</span>
//             <span class="namesaint">${nameSaint[i]}</span>
//         </div> `;
//     } else if (contDayName == 6){
//         console.warn(i, dayText[contDayName]);
//         calendar += `
//         <div class="box-day text-red">
//             <span class="daytext">${dayName[contDayName]}</span>
//             <span class="daynumber">${i}</span>
//             <span class="namesaint">${nameSaint[i]}</span>
//         </div> `;
//     } else {
//         contDayName = 0;
//         console.log(i,dayText[contDayName]);
//         calendar += `
//         <div class="box-day">
//             <span class="daytext">${dayName[contDayName]}</span>
//             <span class="daynumber">${i}</span>
//             <span class="namesaint">${nameSaint[i]}</span>
//         </div> `;
//     }
// }
// OUTPUT
// document.querySelector(".calendar").innerHTML = calendar