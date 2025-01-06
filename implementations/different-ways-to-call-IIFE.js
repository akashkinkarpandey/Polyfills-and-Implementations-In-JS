//way 1
;;;
(function(){
    console.log('1');
})()
;;;
//way 2
(
function(){
    console.log('2');
}()
)
;;;
((function () {
  console.log("2.1");
}))();;;
//way 3
;;;
(()=>{
    console.log('3');
})()
;;;
//way 4
+function(){
    console.log('4');
}()
;;;
//way 5
-function(){
    console.log('5');
}()
;;;
//way 6
const a=function(){
    console.log('6');
}()
;;;
//way 7
;;;
!function () {
  console.log("7");
}()
//way 8
;;;
~function () {
  console.log("8");
}()
;;;
//way 9
;;;
void function () {
  console.log("9");
}()
;;;
//way 10
;;;
new function () {
  console.log("10");
}()
;;;
//way 11
;;;
true &&
  function () {
    console.log("11");
  }();

;;;
//way 12
;;;
false ||
  function () {
    console.log("12");
  }()
;;;
//way 13
null ??
  function () {
    console.log("13");
  }()
;;;
// way 14
;;;
undefined ??
  function () {
    console.log("14");
  }()
;;;
//way 15
try {
    throw function () {
      console.log("15");
    };
} catch (error) {
    error()
}