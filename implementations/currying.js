//Simple currying 1
const f1=(a)=>{
    return f2=(b)=>{
        return a+b;
    }
}
console.log(f1(2)(4));
console.log('--------');
//Simple currying 2
function f3(a,b){
    return (a+b);
}
const myAdd=f3.bind(null,3)
console.log(myAdd(4));
console.log(myAdd(6));
//Infinite Currying 
function f4(a){
    return function f5(b){
        if(b) return f4(a+b)
        return a;
    }
} 
console.log("--------");
console.log(f4(1)(6)());
console.log(f4(3)(2)(12)());

//Convert f(a,b,c,d) to f(a)f(b)f(c)f(d),f(a)(b,c)(d),f(a)f(b,c,d) any pattern 
console.log("--------");
function f5(inputFunction){
    return function curriedFunction(...args) {
      if (args.length >= inputFunction.length) {
        return inputFunction(...args);
      } else {
        return function (...nextArgs) {
          return curriedFunction(...args, ...nextArgs);
        };
      }
    };
}
const addAll=(a,b,c,d)=>a+b+c+d
const curriedFunction=f5(addAll)
console.log(curriedFunction)
console.log(curriedFunction(1)(2)(3)(4));
console.log(curriedFunction(1)(2, 3)(4));
console.log(curriedFunction(1)(2, 3,4));
