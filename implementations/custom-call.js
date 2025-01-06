const obj = {
  fname: "Akash",
  lname: "Pandey",
};
function printDetails(city, state) {
  console.log(`${this.fname} ${this.lname} ${city} ${state}`);
}
printDetails.call(obj, "Kolkata","West Bengal");

Function.prototype.myCall = function (...args1) {
  let callThisFunction = this;
  let callerObject=args1[0]
  let argumentsToBePassed=args1.slice(1)
  callerObject.func = callThisFunction;
  callerObject.func(...argumentsToBePassed);
};
printDetails.myCall(obj, "Kolkata","West Bengal");
