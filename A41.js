"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great ";
    }
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicians2 = ["Bilal", "Atif", "saeed"];
make_great(magicians2);
show_magicians(magicians2);
show_magicians;
