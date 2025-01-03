//We need to create a custom implementation of Promise.any
//Promise.any takes an array of promises in argument and returns the promise that resolves first.
//if no promises resolves, all rejected promises are returned as aggregate error 
Promise.customPromiseAny = async function (arrayOfPromises) {
  let resultArray = [];
  let noOfRejectedPromises = 0;
  const p = new Promise((resolve, reject) => {
    arrayOfPromises.forEach((individualPromise, index) => {
      individualPromise
        .then((resolvedValue) => {
            resolve(resolvedValue);
        })
        .catch((error) => {
            resultArray[index] = error;
            noOfRejectedPromises++;
            if (noOfRejectedPromises === arrayOfPromises.length) {
              reject(resultArray);
            }
        });
    });
  });
  return p;
};
async function myPromiseAny(arrayOfPromises) {
  try {
    const result = await Promise.customPromiseAny(arrayOfPromises);
    console.log(result);
  } catch (error) {
    console.log(`Aggregate Error in Promise.any`);
    console.log(error);
  }
}
async function nativePromiseAny(arrayOfPromises) {
  try {
    const result = await Promise.any(arrayOfPromises);
    console.log(result);
  } catch (error) {
    console.log(error);    
  }
}

function resolveOnlyPromise(afterSeconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved after ${afterSeconds} seconds`);
    }, afterSeconds * 1000);
  });
  return p;
}
function rejectOnlyPromise(afterSeconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Rejected after ${afterSeconds} seconds`);
    }, afterSeconds * 1000);
  });
  return p;
}
//uncomment the below arrays one at a time and put into the functions myPromiseAll,nativePromiseAll to see the output
// const allToBeResolvedPromises = [
//   resolveOnlyPromise(3),
//   resolveOnlyPromise(2),
//   resolveOnlyPromise(5),
//   resolveOnlyPromise(4),
// ];
const allToBeRejectedPromises = [
  rejectOnlyPromise(3),
  rejectOnlyPromise(2),
  rejectOnlyPromise(5),
  rejectOnlyPromise(4),
];
// const allMixedPromises1 = [
//   resolveOnlyPromise(1),
//   rejectOnlyPromise(2),
//   resolveOnlyPromise(3),
// ];
// const allMixedPromises2 = [
//   resolveOnlyPromise(3),
//   resolveOnlyPromise(4),
//   rejectOnlyPromise(2),
// ];
// const allMixedPromises3 = [
//   rejectOnlyPromise(3),
//   resolveOnlyPromise(4),
//   rejectOnlyPromise(2),
// ];
// nativePromiseAll(allToBeResolvedPromises);
myPromiseAny(
  allToBeRejectedPromises
);
