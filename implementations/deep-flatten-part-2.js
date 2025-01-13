//fully flatten an object
Object.prototype.myFlatForObjects = function () {
  const myObj=this;
  let newObj={}
  
  for(const [key,value] of Object.entries(myObj)){
    console.log(key,value);
    if((typeof value)==='object'){
        newObj={...newObj,...(value.myFlatForObjects())}
    }
    else{
        newObj[key]=value;
    }
  }
  return newObj
}
const obj = {
  a: "1",
  b: {
    c: "2",
    d: "3",
    e: {
      f: "4",
      g: "5",
    },
  },
  h: {
    i: "6",
  },
};
console.log(JSON.stringify(obj.myFlatForObjects()));
//{"a":"1","c":"2","d":"3","f":"4","g":"5","i":"6"}
console.log(JSON.stringify(obj))
//{"a":"1","b":{"c":"2","d":"3","e":{"f":"4","g":"5"}},"h":{"i":"6"}}
