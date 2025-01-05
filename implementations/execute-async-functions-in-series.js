// function executeAsyncFunctionsInSeries(arrayOfAsyncTasks){
//      This won;t work as forEach does not wait for async callback function to resolve the promise
//     let count=0
//     arrayOfAsyncTasks.forEach(async(individualAsyncTask,index)=>{
//             const p=await individualAsyncTask;
//             array.push(p);
//             count++;
//             if(array.length===arrayOfAsyncTasks.length){
//                 console.log(array);
//             }
//     })
// }
async function executeAsyncFunctionsInSeries1(arrayOfAsyncTasks) {
  try {
    let count = 0;
    const array = [];
    for (let individualAsyncTask of arrayOfAsyncTasks) {
      const resultOfIndividualAsyncTask = await individualAsyncTask;
      array.push(resultOfIndividualAsyncTask);
    }
    console.log("Output of serial processing of async functions");
    console.log(array);
  } catch (error) {
    console.log(error);
  }
}
async function executeAsyncFunctionsInSeries2(arrayOfAsyncTasks) {
  const result = [];
  const results = await arrayOfAsyncTasks.reduce(
    async (accumulatorPromise, currentTask) => {
      const accumulatedResults = await accumulatorPromise;
      const currentResult = await currentTask;
      result.push(currentResult);
      return [...accumulatedResults, currentResult];
    },
    Promise.resolve([])
  );
  console.log(results);
  console.log(result);
}

function resolveOnlyPromise(afterSeconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved after ${afterSeconds} seconds`);
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
executeAsyncFunctionsInSeries2(allToBeResolvedPromises);
