const memoize=function(functionToBeMemoized){
    let cache={};
    return function(){
        let args=JSON.stringify(arguments)
        if(cache[args]){
            console.log(`Cached ${args}`);
            return cache[args]
        }
        const valueFromFunction=functionToBeMemoized(...arguments)
        cache[args]=valueFromFunction
        return valueFromFunction;
    }
}
function factorialFn(n){
    if(n==1 || n==0) return n;
    return n*factorialFn(n-1)
}
const memoizedFunction=memoize(factorialFn);
console.log(memoizedFunction(50));
console.log(memoizedFunction(50));
console.log(memoizedFunction(49));
console.log(memoizedFunction(49));
