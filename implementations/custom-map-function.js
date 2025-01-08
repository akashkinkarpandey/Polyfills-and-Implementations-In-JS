const arr=[1,2,3,4]
const newArr=arr.map((x,i,arr)=>{
    console.log(x,i,arr);
    return x*2
})
console.log(newArr);

const arr1=[2,5,6,10]
Array.prototype.myMap=function(callbackFunction){
    const newArr=[]
    for(const element of this){
        newArr.push(callbackFunction(element,newArr.length+1,this))
    }
    return newArr
}
const newArr2=arr1.map((x,i,arr)=>{
    console.log(x,i,arr);
    return x*2
})
console.log(newArr2);
