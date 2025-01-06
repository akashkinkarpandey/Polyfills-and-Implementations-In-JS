// Given an object which can have a function as a value at a nested level,
// We need to create a function that will accept arguments as input and pass it through all the functions in the input object and return the computed value.
//way 1
function first(obj) {
  return function (...argumentsToFunctionInObj) {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "function") {
        obj[key] = value(...argumentsToFunctionInObj);
      } else {
        obj[key] = first(value)(...argumentsToFunctionInObj);
      }
    }
    return obj;
  };
}
const obj1 = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b + c,
  },
  d: (a, b, c) => a + b + c,
};
console.log(first(obj1)(2, 3, 4));//gives correct output
//{a: {b: 9, c: 9}
//d : 9 }
console.log(first(obj1)(1, 1, 1));//gives same output as previous as original object is mutated,needs to be fixed
//way 2
function returnComputedObject(...allArguments){
    const obj=allArguments[0]
    const argumentsToFunctionInObj=allArguments.slice(1)
    for (const key in obj) {
        const value = obj[key];
        if(typeof value==='function'){
            obj[key] = value(...argumentsToFunctionInObj);
        }
        else{
            obj[key] = returnComputedObject(value,
                ...argumentsToFunctionInObj);
        }
    }
    return obj;
}
const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b + c,
  },
  d: (a, b, c) => a + b + c,
};
console.log(returnComputedObject(obj, 2, 3, 4));//gives correct output
//{a: {b: 9, c: 9}
//d : 9 }
console.log(returnComputedObject(obj, 1, 1, 1));//gives same output as previous as original object is mutated,needs to be fixed

