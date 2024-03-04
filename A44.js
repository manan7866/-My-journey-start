"use strict";
function carcreater(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const Mycar = carcreater("Honda", "City", { colour: "Blue", year: "2024" });
console.log(Mycar);
