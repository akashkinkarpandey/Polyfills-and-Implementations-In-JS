//https://www.geeksforgeeks.org/javascript/lodash-_-once-method/
//https://chatgpt.com/share/6958005d-fa04-8005-b78c-d1da5bc45f1c
function once(fn){
    let result;
    let calledOnce=false;
    return function(...args){
        if(!calledOnce){
          console.log("I have been called ", fn);
          result = fn.call(this, ...args);
          //result = fn.apply(this, args); //works too
          //result = fn(...args); // won't work, context is NOT forwarded
          calledOnce = true;
        }
        return result;
    }
}
// Test Case 1
const sum = (a, b, c) => a + b + c;
const oncedSum = once(sum);
console.log(oncedSum(1, 2, 3));
// I have been called  (a, b, c) => a + b + c
// 6
console.log(oncedSum(3, 4, 5));
// 6
console.log(oncedSum(10,20,30));
// 6
// Test Case 2
function greetWithFullName(lastName) {
  console.log(`Hello from greetWithFullName`);
  return `${this.firstName} ${lastName}`;
}
const oncedName = once(greetWithFullName);
const obj = { firstName: "Peter", oncedName };
console.log(obj.oncedName("Parker"));
console.log(obj.oncedName("Kinkar"));
console.log(obj.oncedName("Pandey"));
// I have been called  ƒ greetWithFullName(lastName) {
//   console.log(`Hello from greetWithFullName`);
//   return `${this.firstName} ${lastName}`;
// }
// Hello from greetWithFullName
// Peter Parker
// Peter Parker
// Peter Parker

