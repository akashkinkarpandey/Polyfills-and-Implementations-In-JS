class Host{
    constructor(){
        this.observers=[]
    }
    registerObserver(observer){
        this.observers.push(observer)
    }
    unregisterObserver(observer){
        this.observers=this.observers.filter(eachObserver=>eachObserver!==observer)
    }
    notifyObserver(callOberserverWithArgument,thisContext){
        let actualContext=thisContext||this
        this.observers.forEach((eachObserver) =>
          eachObserver.call(actualContext, callOberserverWithArgument)
        );
    }
}
const observer1=function(data){
    console.log(`I am observer1 with event-> ${data}`);
}
const observer2 = function (data) {
  console.log(`I am observer2 with event-> ${data}`);
};
const observer3 = function (data) {
  console.log(`I am observer3 with event-> ${data}`);
};
const host=new Host()
host.registerObserver(observer2)
host.notifyObserver('notifying first time')
host.registerObserver(observer3);
host.registerObserver(observer1);
host.notifyObserver(`notifying 2nd time`)
host.unregisterObserver(observer2)
host.notifyObserver(`notifying 3rd time`);
