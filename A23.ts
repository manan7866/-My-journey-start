let blue = "20%"
let red = "10%"
let orange = "20%"


// if /else condition

if (blue == orange ) {
    console.log("colours are equal")
}else {
    console.log("colours are not equal")
}

if (red == orange ) {
    console.log("colours are equal")
}else {
    console.log("colours are not equal")
}
// test in equality
let age1 = 20;
let age2 =15

if (age1 == 20) {
    console.log("you are eligible for apply")
}else {
    console.log("you are not eligible for apply")
}
if (age2 == 20) {
    console.log("you are eligible for apply");
}
else {
    console.log("you are not eligible for apply");
}

if (age1 != 20) {
    console.log("you are eligible for apply")
}else {
    console.log("you are not eligible for apply")
}
if (age2 != 20) {
    console.log("you are eligible for apply");
}
else {
    console.log ("you are not eligible for apply");
}

// in upper and lower condition

if (age2 <= age1) {
    console.log("younger")
}

if (age1 >= age2) {
    console.log("Older")
}
// and and condition
let education = "metric"
let education2 ="middle"
let age = 18;
let age3 = 15;

if (education == "metric" && age == 18 ) {
    console.log("you are eligible for job")
}else {
   console.log(" you are not eligible for job")
}
if (education == "metric" && age3 == 18 ) {
    console.log("you are eligible for job")
}else {
   console.log(" you are not eligible for job")
}

// or condition

if (education == "metric" || age3 == 18 ) {
    console.log("you are eligible for job")
}else {
   console.log(" you are not eligible for job")
}
if (education2 == "metric" || age3 == 18 ) {
    console.log("you are eligible for job")
}else {
   console.log(" you are not eligible for job")
}
 // test items in aerry

let country :string[] = ["Pakistan","China" "Afghanistan","Iran"];


if (country.includes("Pakistan")) {
    console.log("pakistan available in list")
} else {
    console.log("pakistan is not available in list");
}


if (country.includes("India")) {
    console.log("India is  available in list");
} else {
    console.log("India is not available in list ")
}