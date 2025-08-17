const arr = [1, 2, 3, 4];
const newArr = arr.filter((x, i, arr) => {
  console.log(x, i, arr);
  return x %2==1;
});
console.log(newArr);

const arr1 = [2, 5, 6, 10,13,14,11];
Array.prototype.myFilter = function (callbackFunction) {
  const newArr = [];
  // for (const element of this) {
  //   if(callbackFunction(element, newArr.length + 1, this))
  //       newArr.push(element)
  // }
  for (let i = 0; i < this.length; i++) {
    if (callbackFunction(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
const newArr2 = arr1.myFilter((x, i, arr) => {
  console.log(x, i, arr);
  return x % 2 == 1;
});
console.log(newArr2);
