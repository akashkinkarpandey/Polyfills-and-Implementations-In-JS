//https://www.geeksforgeeks.org/javascript/lodash-_-partial-method/

//https://chatgpt.com/share/69580c17-ae90-8005-bac7-09c06a0b0595
partial.placeholder='_';
function partial(fn,...args){
    return function(...nextArgs){
        let i=0;
        const copyOfArgs=[...args]
        copyOfArgs.forEach((element, index) => {
          if (element === partial.placeholder) copyOfArgs[index] = nextArgs[i++];
        });
        // return fn.apply(this, copyOfArgs); //works
        return fn.apply(this, copyOfArgs.concat(nextArgs.slice(i)));
    }
}
// Test Case 1
const sumOfThree = (a, b, c) => a + b + c;
const partialSum = partial(sumOfThree, 1, '_', 3);
console.log(partialSum(2));
console.log(partialSum(4));
// 6
// 8

// Test Case 2
const productOfFour = (a, b, c, d) => a * b * c * d;
const partialProduct = partial(productOfFour, '_', '_', 3, '_');
console.log(partialProduct(1, 2, 4));
// 24

const f = partial(sumOfThree, '_', '_', '_');
console.log(f(1,2,3,4,5)); // 6 (extra args ignored by function itself)
console.log(f(1)); // NaN (1+undefined so NaN)
