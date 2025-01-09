const filterMultiDimensionalArray=function(array,filterCondition){
    const filteredElements=[]
    for(const element of array){
        if(Array.isArray(element)){
            const resultFromNestedArray = filterMultiDimensionalArray(
              element,
              filterCondition
            );
            filteredElements.push(resultFromNestedArray)
        }else{
            if(filterCondition(element))
                filteredElements.push(element)      
        }
    }
    return filteredElements;
}
const array=[['a',['b',[true,['d',['e',['f',{a:'a'}],9]]]]]]
const filterCondition=(e)=>typeof e==="string";
console.log(filterMultiDimensionalArray(array,filterCondition).toString());
//a,b,d,e,f
console.log(JSON.stringify(filterMultiDimensionalArray(array, filterCondition)));
// [["a", ["b", [["d", ["e", ["f"]]]]]]];