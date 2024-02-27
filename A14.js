"use strict";
let guest = ["mirza", "Fraz", "Daniyal", "Aftab"];
let leave = "mirza";
console.log(leave + " " + "cannot attend the Dinner");
let newguest = "Subhanullah";
guest[guest.indexOf(leave)] = newguest;
console.log(guest);
guest.map((items) => console.log(`Dear ${items},you are invited to the Dinner`));
