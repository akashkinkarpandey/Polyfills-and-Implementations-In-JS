const obj = {
  fname: "Akash",
  lname: "Pandey",
};
function printDetails(city, state) {
  console.log(`${this.fname} ${this.lname} ${city} ${state}`);
}
printDetails.call(obj, "Kolkata");

Function.prototype.myCall = function (...args1) {
  let callThisFunction = this;
  callThisFunction(...args1);
};
const refPrintDetails2 = printDetails.myCall(obj, "Kolkata");
refPrintDetails2("West Bengal");
