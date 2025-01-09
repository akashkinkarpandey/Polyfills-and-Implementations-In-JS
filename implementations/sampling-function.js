//call a function only at whenToBeCalled moment 
//If whenToBeCalled=2, call at 2nd,4th ,6th time..
const samplingFunction = function (functionToBeCalled,whenToBeCalled=1,thisContext) {
  let index = 0;
  return function (...args) {
    let context= thisContext || this;
    if(index==whenToBeCalled-1){
        index=0
        functionToBeCalled.apply(context,args)
        // functionToBeCalled()
    }else{
        index++;
    }
  };
};
const print=()=>{
    console.log(`Hello World`);
}
const callIt = samplingFunction(print,2)
callIt()
callIt() //called here
callIt()
callIt(); //called here