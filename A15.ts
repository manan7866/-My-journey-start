let guest = ["mirza", "Fraz", "Daniyal", "Aftab"];
let leave = "Aftab";
let newGuest = "Iqbal";
guest[guest.indexOf(leave)]= newGuest;
 console.log(guest)
guest.map((items)=>
console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people`));

 // begin guest add
let guestBeg = "Imtiaz";
guest.unshift(guestBeg)
// console.log(guest);

// middle guest add

let middleguest = "Sarfaraz";
let middleindex = guest.length/2
guest.splice(middleindex,0,middleguest)
// console.log(guest);

// add guest in end
guest.push("Tanver")
console.log(guest);
// invite  guest
guest.map((items)=>
console.log(`Dear ${items},you are invited to the dinner`));