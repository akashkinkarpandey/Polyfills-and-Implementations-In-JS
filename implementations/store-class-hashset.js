const myHashSet=function(){
    this.storeObj={}
    this.set=function(element,value){
        this.storeObj[element]=value
    }
    this.get = function (element) {
      return this.storeObj[element];
    };
    this.hasIt=function(key){
        return !!this.storeObj[key]
    }
}
const myStore=new myHashSet()
myStore.set(1,3)
console.log(myStore.get(1));
console.log(myStore.get(2));
console.log(myStore.hasIt(1));
console.log(myStore.hasIt(2));

