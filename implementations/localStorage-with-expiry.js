window.myLocalStorage={
    setItem(key,value,expiry=30*24*3600*1000){
        let valueAndExpiry={
            data:value,
            expiry:Number(Date.now()+expiry)
        }       
        window.localStorage.setItem(key, JSON.stringify(valueAndExpiry));
    },
    getItem(key){
        let value=JSON.parse(window.localStorage.getItem(key))
        if(value){
            if(value.expiry<Date.now()){
                window.localStorage.removeItem(key)
                return null
            }
            return value.data
        }
        return null
    },
    removeItem(key){
        window.localStorage.removeItem(key)
    },
    clear(){
        window.localStorage.clear()
    },
    length(){
        return window.localStorage.length
    }
}
myLocalStorage.setItem('akash','pandey',5)
setTimeout(() => {
    console.log(myLocalStorage.getItem('akash'));
},6)

myLocalStorage.setItem("kinkar", "ok", 5);
setTimeout(() => {
  console.log(myLocalStorage.getItem("kinkar"));
}, 4);


// myLocalStorage.setItem('test','universe')
// myLocalStorage.clear()
// console.log(myLocalStorage.getItem('test'));