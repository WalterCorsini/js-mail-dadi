"use strict";
// declaration array and variable
const bodyElem = document.getElementById("body");
// console.log(bodyElem)
const dayName = ["Lunedi", "Martedi", "Mercoledi",
"Giovedi", "Venerdi", "Sabato", "Domenica"]
const monthName = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
const monthNumber = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const nameSaint = ["San Mourinho", "San Diego Milito", "San Wesley Sneider", "San Douglas Maicon", "San Walter Samuel", "San Julio Cesar", "San Javier Zanetti", "San Thiago Motta", "San Esteban Cambiasso", "San Rodrigo Palacio", "San Massimo Moratti", "San Ricardo Quaresma", "San Marko Arnautovic", "San David Suazo", "San Amantino Mancini", "San Lucio", "San Christian Chivu", "San Goran Pandev", "San Samuel Eto'o", "San Rene Khrin", "San Giulio Donati", "Alen Stevanovic", "San Davide Santon", "San McDonald Mariga", "San Paolo Orlandoni", "San Nicolas Burdisso", "San Marco Materazzi", "San Ivan Cordoba", "San Dejan Stankovic", "San Sulley Muntari", "San Patrick Vieira", "San Mario Balotelli"]
let calendar = "";
let contDayName = 0;
let contMonth = 0;


// LOGIC

// cicle for 2024 year 
for(let i = 0; i <= monthNumber[contMonth]; i++, contDayName++){
    // condition if you have reached the end of the month and not the last month
    if(i === monthNumber[contMonth] && contMonth <= 11){
        contMonth += 1;
        i = 0;
        calendar +="</div>";
    }
    // various checks from Monday to Sunday and whether it is the first or last of the month
    if(contDayName < 6 && contMonth <= 11 && i !== 0){
        // console.log(dayName[contDayName], i+1, monthName[contMonth]);
        calendar += `
            <div class="box-day">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div> `;
    } else if(contDayName < 6 && contMonth <= 11 && i === 0){
        // console.log(dayName[contDayName], i+1, monthName[contMonth]);
        calendar += `
        <h2>${monthName[contMonth]}</h2>
        <div class="calendar">
            <div class="box-day">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div>`;
    }

    if (contDayName === 6 && contMonth <= 11 && i !== 0){
        // console.log(dayName[contDayName], i+1, monthName[contMonth]);
        calendar += `
            <div class="box-day text-red">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div> `;
    } else if(contDayName === 6 && contMonth <= 11 && i === 0){
        // console.log(dayName[contDayName], i+1, monthName[contMonth]);
        calendar += `
        <h2>${monthName[contMonth]}</h2>
        <div class="calendar">
            <div class="box-day">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div>`;
    }
    
    if(contDayName == 7 && contMonth <= 11 && i !== 0){
        // console.log(dayName[contDayName], i+1, monthName[contMonth]);
        contDayName = 0;
        calendar += `
            <div class="box-day">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div> `;
    } else if(contDayName == 7 && contMonth <= 11 && i === 0){
        // console.log(dayName[contDayName], i+1, monthName[contMonth]);
        contDayName = 0;
        calendar += `
        <h2>${monthName[contMonth]}</h2>
        <div class="calendar">
            <div class="box-day">
                <span class="day-text">${dayName[contDayName]}</span>
                <span class="day-number">${i+1}</span>
                <span class="month-name">${monthName[contMonth]}</span>
            </div>`;
    }

}

// OUTUPUT
document.getElementById("body").innerHTML = calendar;