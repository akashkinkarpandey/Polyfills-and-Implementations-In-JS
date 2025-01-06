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
console.log(date.getTime());//unixtimestamp in milliseconds
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
//2025
console.log('date.getUTCFullYear()',date.getUTCFullYear());
//2025
console.log("date.getMonth()", date.getMonth());
//0 (January aka monthName starts from 0)
console.log("date.getDate()", date.getDate());
//6 (Day starts from 1)(6 is 6th January)
console.log("date.getDay()", date.getDay());
//1 (Monday is 1,Sunday is 7)
console.log("date.getHours()", date.getHours());//24 hr format
console.log("date.getMinutes()", date.getMinutes());
console.log("date.getSeconds()", date.getSeconds());
console.log("date.getMilliseconds()", date.getMilliseconds());
//503
console.log('date.getTimezoneOffset()',date.getTimezoneOffset()/60);
// Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer
// -5.5 is constant output
console.log("date.toISOString()", date.toISOString());
// date.toISOString() 2025-01-06T18:09:31.503Z
//503 is milliseconds 
//Z means UTC timezone(england's time)
console.log("date.toJSON()", date.toJSON());
//2025-01-06T18:20:36.443Z 
console.log("date.toString()", date.toString());
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
