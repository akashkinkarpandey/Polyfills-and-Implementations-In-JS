const obj={
    fname:'Akash',
    lname:'Pandey'  
}
function printDetails(city,state){
    console.log(`${this.fname} ${this.lname} ${city} ${state}`);
}
const refPrintDetails=printDetails.bind(obj,"Kolkata")
refPrintDetails("West Bengal")

Function.prototype.myBind=function(...args1){
    let callThisFunction=this
    const firstSetOfArguments=args1.slice(1)
    return function(...args2){
      callThisFunction.call(args1[0], ...firstSetOfArguments, ...args2);
      //we can also do callThisFunction.apply(args1[0],[...firstSetOfArguments,...args2])
    }
}
const refPrintDetails2 = printDetails.myBind(obj, "Kolkata");
refPrintDetails2("West Bengal");
