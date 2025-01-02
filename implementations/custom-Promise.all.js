//we need to create a custom implementation of Promise.all 
//Promise.all takes an array of promises and returns a promise that resolves when all of the promises in the argument have resolved or rejects with the reason of the first passed promise that rejects.

Promise.customPromiseAll=async function(arrayOfPromises){
    let resultArray=[]
    let noOfResolvedPromises=0
    const p=new Promise((resolve,reject)=>{
        arrayOfPromises.forEach((individualPromise,index)=>{
            individualPromise
            .then((resolvedValue)=>{
                resultArray[index]=resolvedValue
                noOfResolvedPromises++;
                if(noOfResolvedPromises===arrayOfPromises.length){
                    resolve(resultArray)
                }
            })
            .catch((error)=>{
                reject(error)
            })
        })
    })
    return p
}
async function myPromiseAll(arrayOfPromises) {
    const result=await Promise.customPromiseAll(arrayOfPromises)
    console.log(result);
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
//uncomment the below arrays one at a time and put into the functions myPromiseAll,nativePromiseAll to see the output
// const allToBeResolvedPromises = [
//   resolveOnlyPromise(3),
//   resolveOnlyPromise(2),
//   resolveOnlyPromise(5),
//   resolveOnlyPromise(4),
// ];
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
const allMixedPromises2 = [
  resolveOnlyPromise(3),
  resolveOnlyPromise(4),
  rejectOnlyPromise(5),
];
// nativePromiseAll(allToBeResolvedPromises);
myPromiseAll(allMixedPromises2);
