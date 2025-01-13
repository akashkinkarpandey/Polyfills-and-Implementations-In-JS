const arr = [1, [2], [3, [4]], 5,[[6]]];
console.log(JSON.stringify(arr.flat()));
//[1,2,3,[4],5,[6]]
console.log(JSON.stringify(arr));
//[1,[2],[3,[4]],5,[[6]]]
//Below is flatten for depth 1
Array.prototype.myFlatForLevel1=function(level=1){
    const myArray=this
    let myNewArray=[];
    for (let i = 0; i < myArray.length; i++) {
      if (Array.isArray(myArray[i])) {
        const currentArray = myArray[i];
        for (let j = 0; j < currentArray.length; j++) {
            myNewArray.push(currentArray[j]);
        }
      } else {
        myNewArray.push(myArray[i]);
      }
    }
    return myNewArray
}
console.log('`````````````');
const arr1 = [1, [2], [3, [4]], 5, [[6]]];
console.log(JSON.stringify(arr1.myFlatForLevel1()));
//[1,2,3,[4],5,[6]]
console.log(JSON.stringify(arr1));
//[1,[2],[3,[4]],5,[[6]]]
//Below is flatten till any depth
Array.prototype.myFlat = function (level,currentLevel=0) {
  if(currentLevel>level)
    return [this];
  const myArray = this;
  let myNewArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (Array.isArray(myArray[i])) {
      myNewArray.push(...myArray[i].myFlat(level,currentLevel+1))
    } else {
      myNewArray.push(myArray[i]);
    }
  }
  return myNewArray;
};
console.log("`````````````");
const arr2 = [1, [2], [3, [4]], 5, [[6]]];
console.log(JSON.stringify(arr2.myFlat(2)));
//[1,2,3,4,5,6]
console.log(JSON.stringify(arr2));
//[1,[2],[3,[4]],5,[[6]]]