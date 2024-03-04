"use strict";
let myBike = "70cc";
// in true
console.log("My Bike == '70cc'?predict true");
console.log(myBike == '70cc');
// in true
console.log("My Bike != '100cc'? predict true");
console.log(myBike != '100cc');
// in false
console.log("My Bike == '70cc'?predict true");
console.log(myBike == '100cc');
console.log("My Bike != '100cc'? predict true");
console.log(myBike != '70cc');
// letter length in true condition
console.log("MyBike.length == 4?predict true");
console.log(myBike.length == 4);
console.log("MyBike.length != 8? predict true");
console.log(myBike.length != 8);
// letter length in false condition
console.log("MyBike.length == 8?predict true");
console.log(myBike.length == 8);
console.log("MyBike.length != 4? predict true");
console.log(myBike.length != 4);
// letter compare condition
console.log("20 > 10? predict true");
console.log(20 > 10);
console.log("10 > 20? predict false");
console.log(10 > 20);
console.log("50 > 100? predict false");
console.log(50 > 100);
console.log("100 > 50? predict true");
console.log(100 > 50);
// && operator
console.log("My Bike == '70cc' && myBike.length == 4?predict true");
console.log(myBike == '70cc' && myBike.length == 4);
console.log("My Bike == '100cc' && myBike.length == 10?predict true");
console.log(myBike == '100cc' && myBike.length == 10);
