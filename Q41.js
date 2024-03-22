"use strict";
// 41. Magicians: Make a array of magician's names. Pass the array to a function called showmagicians(), which prints
// the name of each magician in the array
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["jack", "alonso", "lau"];
showMagicians(magician);
