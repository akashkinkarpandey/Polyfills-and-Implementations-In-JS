//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
const obj={
    fname:'Akash',
    lname:'Pandey',
    age:18
}
const proxyObj=new Proxy(
    obj,
    {
        get(target,property){
            console.log({target,property});
            if(property in target)
                return target[property];
            return false;
        },
        set(target,property,value){
            if(property in target){
                switch(property){
                    case 'lname':
                    case 'fname':
                        if(typeof value!=='string')
                            throw new Error(`Invalid type for ${property}`)
                        break;  
                    case 'age':
                        if(typeof value!=='number')
                            throw new Error(`Invalid type for ${property}`)
                        if(value<=0)
                            throw new Error(`Invalid value for ${property}`)
                        break;
                }
                target[property] = value;
            }
        }
    }
)
proxyObj.fname = "myfirstname";
proxyObj.lname = "mylastname"
proxyObj.age = 10
console.log(proxyObj.fname); 
console.log(proxyObj.lname); 
console.log(proxyObj.age); 
console.log(proxyObj.randomVariable); 

try {
    proxyObj.fname = 123;
    console.log(proxyObj.fname);
} catch (error) {
    console.log(error.message);
}
try {
    proxyObj.lname = 11;
    console.log(proxyObj.lname);
} catch (error) {
    console.log(error.message);
}
try {
    proxyObj.age = "age";
    console.log(proxyObj.age);
} catch (error) {
    console.log(error.message);
}
try {
  proxyObj.age = -2;
  console.log(proxyObj.age);
} catch (error) {
  console.log(error.message);
}