// unixtimestamp.com
// unix time glitch year 2038 
// unix time started at 1st Januray night 12 
// International Organization for Standardization 
// Greenwhich Mean Time GMT
// UTC Universal Coordinated Time (UTC)
const date=new Date()
// Date is constructor function 
console.log('date',date);
//Mon Jan 06 2025 23:06:46 GMT+0530 (India Standard Time)
console.dir(date);//to log as object
console.log("date.getTime()", date.getTime());//unixtimestamp in milliseconds
//how much time has passed since 1st january 1970
console.log(`date.toLocaleString()`, date.toLocaleString());
// 06/01/2025, 23:07:41
console.log(date.toLocaleString('en-GB'));//en is english language,GB is great britain
//  06/01/2025, 23:09:25
console.log(date.toLocaleString("en-GB",{hour12:true}));
// 06/01/2025, 11:10:20 pm
console.log(date.toLocaleDateString('en-GB'));
// 06/01/2025

console.log("date.getFullYear()", date.getFullYear());
//2025 //local (device's year)
console.log('date.getUTCFullYear()',date.getUTCFullYear());
//2025
console.log("date.getMonth()", date.getMonth());
//0 (January aka monthName starts from 0)
console.log("date.getUTCMonth()", date.getUTCMonth()); //0
console.log("date.getDate()", date.getDate());
//6 (Day starts from 1)(6 is 6th January)
console.log("date.getUTCDate()", date.getUTCDate()); //6
console.log("date.getDay()", date.getDay());
//1 (Monday is 1,Sunday is 7)
console.log("date.getUTCDay()", date.getUTCDay());
console.log("date.getHours()", date.getHours());//24 hr format(Value is 0 to 23 both inclusive) //local
console.log("date.getUTCHours()", date.getUTCHours());//UTC
console.log("date.getMinutes()", date.getMinutes());
console.log("date.getUTCMinutes()", date.getUTCMinutes());
console.log("date.getSeconds()", date.getSeconds());
console.log("date.getUTCSeconds()", date.getUTCSeconds());
//local and UTC seconds are always same
console.log("date.getMilliseconds()", date.getMilliseconds());
//503
console.log("date.getUTCMilliseconds()", date.getUTCMilliseconds());
//local and UTC milli seconds are always same
console.log('date.getTimezoneOffset()',date.getTimezoneOffset()/60);
// Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer
// -5.5 is constant output
console.log("date.toISOString()", date.toISOString());
// 2025-01-06T18:09:31.503Z
//503 is milliseconds 
//Z means UTC timezone(england's time)
console.log("date.toJSON()", date.toJSON());
//2025-01-06T18:20:36.443Z 
console.log("date.toString()", date.toString());//as per local time
//Mon Jan 06 2025 23:53:25 GMT+0530 (India Standard Time) 
//It is same as logging date
console.log(
    typeof date.toString()//string
);
console.log(
  typeof date//object
);
console.log(date.toUTCString());
//Mon, 06 Jan 2025 18:30:43 GMT
//This is great Britain's date
//---------------------------
const myDate = new Date(1736270847516);
//now we have passed unixtimestamp as argument
console.log("myDate.getTime()", myDate.getTime());
//always give same time now
console.log('myDate.toString("en-GB")', myDate.toString("en-GB"));
console.log('myDate.toLocaleString("en-GB")',myDate.toLocaleString("en-GB"));//en is english language,GB is great britain
//now toISOString - all the methods will return fixed number due to passing of unix timestamp as argument to Date object
// -----------------------------
console.log("myDate.toISOString()", myDate.toISOString());
//ISO and LocalString will be different though as ISO is UTC timezone, Local is your device's locale time
console.log("myDate.getMinutes()", myDate.getMinutes());
//-----------

console.log('Date()->',Date());//same as new Date().toString()
const unixepoch=new Date(0)
console.log(
  "unixepoch.toString()->",
  unixepoch.toString(),
  ',unixepoch.toISOString()->',
  unixepoch.toISOString()
);
// ------------------------
console.log(`Date.now()->`,Date.now());
//same sa new Date().getTime()
// ------------------------ 
const negativeDate=new Date(-10000000000)
console.log('negativeDate.toString()', negativeDate.toString());
//------------------------------
const user1DOB='02/07/2000'
const user2DOB='02-08-2001'
console.log(`user1DOB is ${user1DOB}`);
//user1DOB is 02/07/2000
console.log(`user2DOB is ${user2DOB}`);
//user2DOB is 02/08/2001
const DOB1=new Date(user1DOB);
const DOB2=new Date(user2DOB);
console.log(`DOB1 is ${DOB1}`);
//DOB1 is Mon Feb 07 2000 00:00:00 GMT+0530 (India Standard Time)
console.log(`DOB2 is ${DOB2}`); 
//DOB2 is Thu Feb 08 2001 00:00:00 GMT+0530 (India Standard Time)
//while passing as argument to new Date it takes in MM/DD/YYYY format or in YYYY/DD/MM format
//So to actually get the correct date we need to do below
const actualDOB1=new Date(user1DOB.split("/").reverse().join("/"))
const actualDOB2 = new Date(user2DOB.split("/").reverse().join("/"));
console.log(`actual DOB 1 is-> ${actualDOB1}`);
//actual DOB 1 is-> Sun Jul 02 2000 00:00:00 GMT+0530 (India Standard Time)
console.log(`actual DOB 2 is-> ${actualDOB2}`);
//actual DOB 2 is-> Thu Aug 02 2001 00:00:00 GMT+0530 (India Standard Time)
// slash or dash both work 
// inside new Date('02-08-2001') we can pass
console.log(
  `actualDOB1.getTime()>actualDOB2.getTime() is ${
    actualDOB1.getTime() > actualDOB2.getTime()
  }i.e.  user2 is younger`
);
//---------------------
const userDOB='1970-01-12T00:00:00'
const userDOBinUTC = "1970-01-12T00:00:00Z";
//same as 1970-01-12T00:00:00+00:00
//same as 1970-01-12T00:00:00-00:00
//Z at end denotes UTC,without Z it will be IST(slash does not work here)
const dateinIST1 = new Date(userDOB);
const dateInUTC = new Date(userDOBinUTC);
console.log(`dateinIST->${dateinIST1}`);//time in India
console.log(`dateInUTC->${dateInUTC}`);//time in India

const dateInIST2 = new Date("2024-01-12T23:00:00+05:00");//different timezone is given 
console.log(`dateInIST2->${dateInIST2}`);//always Indian time is logged
console.log(`dateInIST2.toISOString()->${dateInIST2.toISOString()}`);
console.log(`dateInIST2.toUTCString()->${dateInIST2.toUTCString()}`);
console.log(`dateInIST2.getTime()->${dateInIST2.getTime()}`);

const whatADate=new Date(2023,11,1,4,50,45,5000)
console.log('whatADate',whatADate);
//  Fri Dec 01 2023 04:58:25 GMT+0530 (India Standard Time)
console.log("whatADate.getMinutes()", whatADate.getMinutes());
