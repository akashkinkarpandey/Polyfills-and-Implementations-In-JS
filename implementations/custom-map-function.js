const arr=[1,2,3,4]
const newArr=arr.map((x,i,arr)=>{
    console.log(x,i,arr);
    return x*2
})
console.log(newArr);

const arr1=[2,5,6,10]
Array.prototype.myMap=function(callbackFunction){
    const newArr=[]
    for (let i = 0; i < this.length; i++) {
      newArr.push(callbackFunction(this[i], i, this));
    }
    return newArr
}
const newArr2 = arr1.myMap((x, i, arr) => {
  console.log(x, i, arr);
  return x * 2;
});
console.log(newArr2);
