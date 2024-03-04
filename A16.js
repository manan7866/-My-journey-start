"use strict";
let Guest = ["Atif", "usama", "Hamza", "Javeed", "Usman"];
console.log("Due to limited space, only two people can be invited for dinner.");
// Removing guest
while (Guest.length > 2) {
    const removedguest = Guest.pop();
    console.log(`Sorry, ${removedguest}, you're no longer invited to dinner`);
}
// invititations for people
Guest.forEach((Guest) => console.log(`Dear ${Guest},you're still invited to dinner`));
// removing to last name from list
Guest.forEach((Guest), console.log("Final guest list ", Guest));
