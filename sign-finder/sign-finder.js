/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

//import
import { getSign, getZodiac } from "horoscope";
import fs from "fs/promises";

let mm = Number(process.argv[2]);
let dd = Number(process.argv[3]);
let yyyy = Number(process.argv[4]);

let astroSign = getSign({ month: mm, day: dd });
let zodiacSign = getZodiac(yyyy);

console.log(
  `Your astrological sign is ${astroSign} and your zodiac sign is ${zodiacSign}`
);

//Bonus Challenge: Tell the user their birthstone based on their birth month!
//Read birthstone data from the data.json file, and get the birthstone for the user-inputed month
async function getBirthstone() {
  //Read birthstone data from the data.json file
  const data = await fs.readFile("./data.json", "utf8"); //
  //Declare a variable named parsedData and store the parsed data in it converted using the JSON.parse method
  const parsedData = JSON.parse(data);
  console.log(`Your birthstone  is ${parsedData[mm]}.`);
}

getBirthstone();
