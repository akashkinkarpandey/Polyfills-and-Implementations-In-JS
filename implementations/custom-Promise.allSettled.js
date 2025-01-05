//We are doing a polyfill for Promise.allSettled
//It takes an array of promises as argument
//It returns an array of promises of same length with their resolved or rejected values 
Promise.customPromiseAllSettled = function (arrayOfPromises) {
  let resultArray = [];
  let noOfPromises = 0;
  const p = new Promise((resolve, reject) => {
    arrayOfPromises.forEach((individualPromise, index) => {
      individualPromise
        .then((resolvedValue) => {
          resultArray[index] = resolvedValue;
          noOfPromises++;
          if (noOfPromises === arrayOfPromises.length) resolve(resultArray);
        })
        .catch((error) => {
          resultArray[index] = error;
          noOfPromises++;
          if (noOfPromises === arrayOfPromises.length) {
            reject(resultArray);
          }
        });
    });
  });
  return p;
};
async function myPromiseAllSettled(arrayOfPromises) {
  try {
    const result = await Promise.customPromiseAllSettled(arrayOfPromises);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
async function nativePromiseAllSettled(arrayOfPromises) {
  try {
    const result = await Promise.allSettled(arrayOfPromises);
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
const allToBeResolvedPromises = [
  resolveOnlyPromise(3),
  resolveOnlyPromise(2),
  resolveOnlyPromise(5),
  resolveOnlyPromise(4),
];
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
//   rejectOnlyPromise(2),
// ];
// const allMixedPromises3 = [
//   rejectOnlyPromise(3),
//   resolveOnlyPromise(4),
//   rejectOnlyPromise(2),
// ];
// nativePromiseAllSettled(allMixedPromises3);
myPromiseAllSettled(allToBeResolvedPromises);
