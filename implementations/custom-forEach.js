

Array.prototype.customForEach = function (callbackFn, thisContext) {
  if (typeof callbackFn !== "function") {
    throw new Error(`Callback function received incorrectly`);
  }
//   for (let index = 0; index < this.length; index++) {
//     if (this.hasOwnProperty(index)) {
//       callbackFn.call(thisContext, this[index], index, this);
//     }
//   }
  //same as above
  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      callbackFn.call(thisContext, this[index], index, this);
    }
  }
};
const array1 = [1, 2, 3, 4, 5];
array1.customForEach(function (currentElement, index, currentArray) {
    console.log(`Current element is ${currentElement}`);
    console.log(`Current index is ${index}`);
    console.log(`Current array is ${currentArray}`);
}, this);
console.log(`Custom for Each implementation ends`);
const array2 = [1, 2, 3, 4, 5];
array2.forEach(function (currentElement, index, currentArray) {
  console.log(`Current element is ${currentElement}`);
  console.log(`Current index is ${index}`);
  console.log(`Current array is ${currentArray}`);
});
