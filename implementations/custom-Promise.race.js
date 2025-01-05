//We need to implement polyfill for Promise.race
//It takes an array of promises as argument
//It returns a promise that resolves or rejects as soon as one of the promises in the argument resolves or rejects
//uncomment the below arrays one at a time and put into the functions myPromiseAll,nativePromiseAll to see the output
Promise.customPromiseRace = function (arrayOfPromises) {
  const p = new Promise((resolve, reject) => {
    arrayOfPromises.forEach((individualPromise, index) => {
      individualPromise
        .then((resolvedValue) => {
          resolve(resolvedValue);
        })
        .catch((error) => {
            reject(error);
        });
    });
  });
  return p;
};
async function myPromiseRace(arrayOfPromises) {
  try {
    const result = await Promise.customPromiseRace(arrayOfPromises);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function nativePromiseRace(arrayOfPromises) {
  try {
    const result = await Promise.race(arrayOfPromises);
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
// nativePromiseAll(allToBeResolvedPromises);
myPromiseRace(allToBeResolvedPromises);
