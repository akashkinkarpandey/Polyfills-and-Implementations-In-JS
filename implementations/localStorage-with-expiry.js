//We need to create our own localStorage object which will have the same methods as the actual localStorage object and also have expiry with key-value pairs 
 
//attaching our localStorage object to window (globalThis) will help us to access it globally
window.myLocalStorage={
    //setItem takes an expiry too apart from key,value as a parameter
    //by default key-value pair expire after 30 days(mentioned in milliseconds below)
    setItem(key,value,expiryAfter=30*24*3600*1000){
        let valueAndExpiry = {
          data: value,
          expiryAt: Number(Date.now() + expiryAfter),
          //Date.now() will give us current time in milliseconds
          //if expiryAfter is 2 ms and current time is 1 ms,then key-value pair should expire at 3 ms
        };       
        window.localStorage.setItem(key, JSON.stringify(valueAndExpiry));
        //JSON.stringify is important to serialize the object to not cause any issues while parsing
    },
    getItem(key){
        let value=JSON.parse(window.localStorage.getItem(key))
        //we need to parse the value since we stringified it while setting
        //value contains the actual value and also expiryAt which denotes the exact time when the key value pair will expire
        if(value){
            //if we got the value for the corresponding key, then we check the current time is greater than the expiration time or not
            //if current time(=Date.now()) is greater than the expiration time,then key-value pair must be removed and null returned
            //if current time is less than the expiration time,then we return the actual value 
            if (value.expiryAt < Date.now()) {
              window.myLocalStorage.removeItem(key);
              return null;
            }
            return value.data//we return actual value if key-value expiration time is less than the current time 
        }
        return null
        //we return null if no value was found for corresponding key
    },
    removeItem(key){
        window.localStorage.removeItem(key)
    },
    clear(){
        window.localStorage.clear()
    },
    length(){
        return window.localStorage.length //return number of key-value pairs
    }
}
myLocalStorage.setItem('akash','pandey',2)
setTimeout(() => {
    console.log(myLocalStorage.getItem('akash'));
},3)

myLocalStorage.setItem("kinkar", "ok",5);
setTimeout(() => {
  console.log(myLocalStorage.getItem("kinkar"));
}, 4);


//Above Output
// null 
// ok 

// myLocalStorage.setItem('test','universe')
// myLocalStorage.clear()
// console.log(myLocalStorage.getItem('test'));