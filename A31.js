"use strict";
let current_users = ["Usman", "Bilal", "Saeed", "Aftab", "Imran", "Farooq", "Abrar"];
let new_users = ["Khalid", "Hamza", "abrar", "saeed", "Tanveer"];
let Cnt_user_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (Cnt_user_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user},is already taken.please enter a new username`);
    }
    else {
        console.log(`Great ${new_user}, is available`);
    }
}
