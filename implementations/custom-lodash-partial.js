function myPartial(func, ...args) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  return function (...remainingArgs) {
    let indexOfRemainingArgs = 0;
    const argsCopy=[...args]
    for (let index = 0; index < argsCopy.length; index++) {
      if (argsCopy[index] === myPartial.placeholder) {
        if (indexOfRemainingArgs >= remainingArgs.length) {
          throw new Error("Not enough arguments provided");
        }
        argsCopy[index] = remainingArgs[indexOfRemainingArgs++];
      }
    }
    return func(...argsCopy, ...remainingArgs.slice(indexOfRemainingArgs));
  };
}
myPartial.placeholder = "_";//customizable placeholder

const mySum = (a, b, c) => a + b + c;
const partial1 = myPartial(mySum, 1, "_");
const ans = partial1(2, 3); // 6
console.log(ans);
const ansNext=partial1(4,6);
console.log(ansNext); // 11
const partial2 = myPartial(mySum, 1, 2);
const ans2 = partial2(3); // 6
console.log(ans);
