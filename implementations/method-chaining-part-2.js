// We need to create the below functionality as an application to method-chaining-part-1.js
// computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
//using constructor function way 1
function ComputeAmount() {
  this.money = 0;
}
ComputeAmount.prototype.crore = function (val) {
  this.money += val * 10000000;
  return this;
};
ComputeAmount.prototype.lac = function (val) {
  this.money += val * 100000;
  return this;
};
ComputeAmount.prototype.thousand = function (val) {
  this.money += val * 1000;
  return this;
};
ComputeAmount.prototype.hundred = function (val) {
  this.money += val * 100;
  return this;
};
ComputeAmount.prototype.ten = function (val) {
  this.money += val * 10;
  return this;
};
ComputeAmount.prototype.unit = function (val) {
  this.money += val * 1;
  return this;
};
ComputeAmount.prototype.value = function (val) {
  return this.money;
};
const computeAmount = new ComputeAmount();
console.log(
  computeAmount
    .crore(1)
    .lac(10)
    .lac(1)
    .thousand(10)
    .thousand(1)
    .hundred(1)
    .ten(1)
    .unit(1)
    .value()
);
//using object  way 2
const computeAmount2 = {
  money: 0,
  crore(val) {
    this.money += val * 10000000;
    return this;
  },
  lac(val) {
    this.money += val * 100000;
    return this;
  },
  thousand(val) {
    this.money += val * 1000;
    return this;
  },
  hundred(val) {
    this.money += val * 100;
    return this;
  },
  ten(val) {
    this.money += val * 10;
    return this;
  },
  unit(val) {
    this.money += val * 1;
    return this;
  },
  value(val) {
    return this.money;
  },
};
const result2 = computeAmount2
  .crore(1)
  .lac(10)
  .lac(1)
  .thousand(10)
  .thousand(1)
  .hundred(1)
  .ten(1)
  .unit(1)
  .value();
console.log(result2);

