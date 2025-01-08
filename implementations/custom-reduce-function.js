//if we pass an initial value ,loop runs from zero-th to the last element in the array(n times)
//if we don't pass an initial value ,loop runs for n-1 times with 1st element in array as initial value
const arr=[1,2,3,4,10]
const initialValue = -1
const finalValue = arr.reduce((prevValue,currentValue,currentIndex,array) => {
    console.log(prevValue, currentValue, currentIndex, array);
    return currentValue + prevValue ;
}, initialValue);
console.log(finalValue);
Array.prototype.myReduce=function(callBackFunction,initialValue){
    let prevValue,index;
    if(initialValue)
        index=0,prevValue=initialValue
    else 
        index=1,prevValue=this[0]
    for(; index<this.length; index++){
            prevValue=callBackFunction(prevValue,this[index],index,this)
    }
    return prevValue;
}
const arr1 = [1, 2, 3, 4, 10];
const initialValue1 = -1;
const finalValue1 = arr1.myReduce(
  (prevValue, currentValue, currentIndex, array) => {
    console.log(prevValue, currentValue, currentIndex, array);
    return currentValue + prevValue;
  },
  initialValue1
);
console.log(finalValue1);