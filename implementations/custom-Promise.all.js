//we need to create a custom implementation of Promise.all 
//Promise.all takes an array of promises and returns a promise that resolves when all of the promises in the argument have resolved or rejects with the reason of the first passed promise that rejects.

Promise.prototype.customPromiseAll=async(arrayOfPromises)=>{
    let resultArray=[]
    arrayOfPromises.forEach((individualPromise,index)=>{
        individualPromise.then((resolvedValue)=>{
            resultArray[index]=resolvedValue
        }).catch((error)=>{
            return error
        })
    })
    return resultArray
}
async function myPromiseAll(arrayOfPromises) {
    const result=await Promise.customPromiseAll(arrayOfPromises)
    return result
}
async function nativePromiseAll(arrayOfPromises){
    const result=await Promise.all(arrayOfPromises)
    console.log(result);
}

function resolveOnlyPromise(afterSeconds){
    const p =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Resolved after ${afterSeconds} seconds`);
        },afterSeconds*1000)
    })
    return p
}
function rejectOnlyPromise(afterSeconds){
    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(`Rejected after ${afterSeconds} seconds`)
        },afterSeconds*1000)
    })
    return p
}
const allToBeResolvedPromises = [
  resolveOnlyPromise(3),
  resolveOnlyPromise(2),
  resolveOnlyPromise(5),
  resolveOnlyPromise(4),
];
//uncomment the below arrays one at a time and put into the functions myPromiseAll,nativePromiseAll to see the output
// const allToBeRejectedPromises = [
//   rejectOnlyPromise(3),
//   rejectOnlyPromise(2),
//   rejectOnlyPromise(5),
//   rejectOnlyPromise(4),
// ];
// const allMixedPromises1 = [
//   resolveOnlyPromise(1),
//   rejectOnlyPromise(2),
//   resolveOnlyPromise(3),
// ];
// const allMixedPromises2 = [
//   resolveOnlyPromise(3),
//   resolveOnlyPromise(4),
//   rejectOnlyPromise(5),
// ];
// nativePromiseAll(allToBeResolvedPromises);
myPromiseAll(allToBeResolvedPromises);
