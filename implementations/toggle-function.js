const callThisFunction=function(...args){
    let index=0
    return function(){
        let valueTobeReturned=args[index%args.length]
        index++;
        return valueTobeReturned;
    }
}
const callThisFunction1=callThisFunction("akash")
console.log(callThisFunction1());
console.log(callThisFunction1());
console.log(callThisFunction1());
const callThisFunction2 = callThisFunction("akash","kinkar","pandey");
console.log(callThisFunction2());
console.log(callThisFunction2());
console.log(callThisFunction2());
console.log(callThisFunction2());
console.log(callThisFunction2());
console.log(callThisFunction2());
console.log(callThisFunction2());


 

