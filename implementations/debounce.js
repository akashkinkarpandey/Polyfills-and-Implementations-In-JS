//Let's say a function f will execute after 5 seconds
//3 seconds passed,and we want to execute f again 
//then previous call to f will be removed and next call to f will be made to execute it again after 5 seconds starting from 3rd second.
//If no more call to f is made after these next 5 seconds,starting from 3 seconds,that is,till 8th second,then only f will execute.
//This process is debouncing.
function debouncedFunction(functionToBeDebounced,callAfterTheseSeconds){
    let hasFinishedCallingId;
    return function(e){
        const context=this;
        clearTimeout(hasFinishedCallingId)
        hasFinishedCallingId=setTimeout(()=>{
            functionToBeDebounced.call(context,e)
        },callAfterTheseSeconds)
    }
}
function executeThisFunctionOnMouseMovement(e){
    console.clear();
    console.log(`Executed`);
    console.log(`x is ${e.x}, y is ${e.y}`)
}
const debouncedFunctionWrapper=debouncedFunction(executeThisFunctionOnMouseMovement,750)
window.addEventListener('mousemove',debouncedFunctionWrapper)