let instance;
class Singleton{
    constructor(){
        if(instance){
            return instance
        }else{
            instance=this
        }
    }
    getInstance(){
        return instance
    }
}
const firstObject=new Singleton()
const secondObject=new Singleton()
console.log(firstObject===secondObject)//true


//way 2
const Singleton2=(
    function(){
        let oneinstance;
        return {
            getInstance(){
                if(oneinstance){
                    return instance
                }else{
                    instance=new Object("the same instance always")
            }
        }
    }
    }   
)()
const first=Singleton2.getInstance()
const second=Singleton2.getInstance()
console.log(first===second);//true

console.log(firstObject===first);//false

