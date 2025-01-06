const obj = {
  fname: "Akash",
  lname: "Pandey",
};
function printDetails(city, state) {
  console.log(`${this.fname} ${this.lname} ${city} ${state}`);
}
printDetails.apply(obj, ["Kolkata", "West Bengal"]);

Function.prototype.myApply = function (...args1) {
  const callThisFunction = this;
  const callerObject = args1[0];
  const argumentsToBePassed = args1[1];//args1.slice(1) further creates another array on top of array we pass ,so we don't slice
  callerObject.func = callThisFunction;
  callerObject.func(...argumentsToBePassed);
};
printDetails.myApply(obj, ["Kolkata", "West Bengal"]);
