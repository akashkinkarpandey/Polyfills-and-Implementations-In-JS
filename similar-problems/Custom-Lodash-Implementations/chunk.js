// https://www.geeksforgeeks.org/javascript/lodash-_-chunk-method/
// https://chatgpt.com/share/6958223b-5200-8005-b116-21e0da65b62f

function chunk(array, chunkSize=1) {
    if(chunkSize==0) //handle this case otherwise last 'if' will be hit which will be incorrect
        return []
    if(!Array.isArray(array))
        return []
    let chunkArray=[];
    let answer=[];
    let copyChunkSize=chunkSize
    array.forEach((element)=>{
        chunkArray.push(element);
        copyChunkSize--;
        if(copyChunkSize==0){
            answer.push(chunkArray);
            chunkArray=[]
            copyChunkSize = chunkSize;
        }
    })
    if (chunkArray.length > 0) answer.push(chunkArray);
    // chunkArray.forEach(element=>console.log(JSON.stringify(element)));
    // console.log(`---------`);
    return answer
}

console.log(JSON.stringify(chunk([1, 2, 3, 4, 5], 1)));// [[1], [2], [3], [4], [5]]
console.log(JSON.stringify(chunk([1, 2, 3, 4, 5], 2)));// [[1, 2], [3, 4], [5]]
console.log(JSON.stringify(chunk([1, 2, 3, 4, 5], 0)));// []
console.log(JSON.stringify(chunk([1, 2, 3, 4, 5], 3)));// [[1, 2, 3], [4, 5]]
console.log(JSON.stringify(chunk([1, 2, 3, 4, 5], 4)));// [[1, 2, 3, 4], [5]]
console.log(JSON.stringify(chunk([1, 2, 3, 4, 5], 5)));// [[1, 2, 3, 4, 5]]
console.log(JSON.stringify(chunk([1, 2, 3, 4, 5], 6)));// [[1, 2, 3, 4, 5]]
console.log(JSON.stringify(chunk([1, 2, 3, 4, 5])));// [[1], [2], [3], [4], [5]]
console.log('------------------');
/*
Cleanest Implementation:
*/
function chunk2(array, size = 1) {
  if (!Array.isArray(array) || size <= 0) return [];

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5], 1))); // [[1], [2], [3], [4], [5]]
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5], 2))); // [[1, 2], [3, 4], [5]]
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5], 0))); // []
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5], 3))); // [[1, 2, 3], [4, 5]]
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5], 4))); // [[1, 2, 3, 4], [5]]
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5], 5))); // [[1, 2, 3, 4, 5]]
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5], 6))); // [[1, 2, 3, 4, 5]]
console.log(JSON.stringify(chunk2([1, 2, 3, 4, 5]))); // [[1], [2], [3], [4], [5]]
console.log("------------------");


function chunk3(array, size = 1) {
  if (!Array.isArray(array) || size <= 0) return [];

  return array.reduce((accumulator,eachElement,index)=>{
        if(index%size==0)
            accumulator.push([])
        accumulator[accumulator.length-1].push(eachElement);
        return accumulator
  },[])
}
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5], 1))); // [[1], [2], [3], [4], [5]]
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5], 2))); // [[1, 2], [3, 4], [5]]
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5], 0))); // []
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5], 3))); // [[1, 2, 3], [4, 5]]
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5], 4))); // [[1, 2, 3, 4], [5]]
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5], 5))); // [[1, 2, 3, 4, 5]]
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5], 6))); // [[1, 2, 3, 4, 5]]
console.log(JSON.stringify(chunk3([1, 2, 3, 4, 5]))); // [[1], [2], [3], [4], [5]]
console.log("------------------");