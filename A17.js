"use strict";
// STORE LOCATION IN ARRY
let location = ["Pakistan", "China", "Japan", "America", "Korea"];
console.log("Original order", location);
// print in alphabetical order list
console.log("Alphabetical Order", [...location].sort());
// original order after sorting
console.log("Original order after sorting", location);
// print in reverce alphabeitic order
console.log("Reverse Alphabetic Order", [...location].sort().reverse());
// original order after reverce sorting
console.log("Original order after reverse sorting", location);
// sorting key
//.sort()
//reverse key
// .reverse()
// reverse order
console.log("Reverse order", [...location].reverse());
// back to original order after reversing
console.log("Back to Original order", location);
// after in sorting order
console.log("Sorted in Alphabetical Order", [...location].sort());
// sort athe revesre order
location.sort((a, b) => b.localeCompare(a));
