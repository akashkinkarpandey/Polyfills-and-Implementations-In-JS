// We want to implement method chaining in JavaScript by implementing a calculator that performs the basic actions like add, subtract, divide, and multiply. 
//way 1 using objects
const calculatorObj={
    result:0,
    add(val){
        this.result+=val
        return this
    },
    subtract(val){
        this.result-=val
        return this;
    },
    multiply(val){
        this.result*=val
        return this;
    },
    divide(val){
        this.result/=val
        return this;
    }
}
const finalObject=calculatorObj.add(10).subtract(11).multiply(-5).divide(2)
console.log(finalObject.result);
//way 2 using constructor functions
const CalculatorFunction=function(){
  this.result=0;//let result won't work as it is not cound with this keyword 
  //const add=()=>{} won't work neither will function add(){} work.
  this.add=function(val){
    this.result += val;
    return this
  };
  this.subtract = (val) => {
    this.result -= val;
    return this;
  };
  this.multiply = (val) => {
    this.result *= val;
    return this;
  };
  this.divide = (val) => {
    this.result /= val;
    return this;
  };
  this.getResult = () => {
    return this.result;
  };
};
const calculator2 = new CalculatorFunction();
const result=calculator2.add(2).subtract(4).multiply(-3).divide(6).getResult();
console.log(result);




