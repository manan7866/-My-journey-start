"use strict";
function make_great2(magicians) {
    const great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("The great " + magicians[i]);
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicians3 = ["Bilal", "Atif", "saeed"];
const great_magicians = make_great2(magicians3);
show_magicians(great_magicians);
show_magicians;
