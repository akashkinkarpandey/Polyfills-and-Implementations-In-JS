const countElementsInDimensionalArray = function (array, filterCondition) {
  let count = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      count =count+ countElementsInDimensionalArray(
        element,
        filterCondition
      );
    } else {
      if (filterCondition(element)) count++;
    }
  }
  return count;
};
const array = [["a", ["b", [true, ["dd", ["e", ["f", { a: "a" }], 9]]],'bb']]];
const filterCondition = (e) => typeof e === "string";
console.log(countElementsInDimensionalArray(array, filterCondition));
//a,b,dd,e,f,bb->Count is 6
