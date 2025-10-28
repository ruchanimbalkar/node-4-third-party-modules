/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

//import moment using the ES Module Syntax
import moment from "moment";
moment().format();

/* 
    //CommonJS Syntax
    const moment = require("moment") // require
    moment().format(); 
 */

//Test the moment function
//console.log(moment([2000]).isLeapYear()); // true
//console.log(moment([2011]).isLeapYear()); // false

//Accept user input
let year = process.argv[2];

if (year != undefined) {
  let result = moment([year]).isLeapYear();
  console.log(result);
  let message = result
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
  console.log(message);
} else {
  console.log("Did you enter the year?");
}

//Test cases
//console.log(moment([2024]).isLeapYear()); // true
//console.log(moment([1979]).isLeapYear()); // false
