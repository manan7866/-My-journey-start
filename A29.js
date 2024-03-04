"use strict";
let users = ["Waheed", "Naseer", "Usama", "Ashraf"];
for (let user of users) {
    if (user === "Waheed") {
        console.log("Hello Waheed, would you like to see a status report");
    }
    else {
        console.log(`Hello ${user},thank you for logging in again`);
    }
}
