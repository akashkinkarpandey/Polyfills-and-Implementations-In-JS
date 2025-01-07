// npm install jsvu -g
// https://github.com/v8/v8 
// https://www.npmjs.com/package/jsvu/v/1.3.3
// Inside folder C:\Users\akash
// Run  ./.jsvu/bin/v8-debug --allow-natives-syntax
// we are using v8-debug
// https://github.com/v8/v8/tree/main/src/d8
// const arr=[1,2,3]
// %DebugPrint(arr)
// Output
// d8> const arr=[1,2,3]
// undefined
// d8> %DebugPrint(arr)
// DebugPrint: 00000292002881CD: [JSArray]
//  - map: 0x02920008cd61 <Map[16](PACKED_SMI_ELEMENTS)> [FastProperties]
//  - prototype: 0x02920008cfd5 <JSArray[0]>
//  - elements: 0x029200098ee1 <FixedArray[3]> [PACKED_SMI_ELEMENTS (COW)]
//  - length: 3
//  - properties: 0x029200000745 <FixedArray[0]>
//  - All own properties (excluding elements): {
//     0000029200000D91: [String] in ReadOnlySpace: #length: 0x029200252201 <AccessorInfo name= 0x029200000d91 <String[6]: #length>, data= 0x029200000011 <undefined>> (const accessor descriptor, attrs: [W__]), location: descriptor
//  }
//  - elements: 0x029200098ee1 <FixedArray[3]> {
//            0: 1
//            1: 2
//            2: 3
//  }
// 000002920008CD61: [Map]
//  - map: 0x02920008183d <MetaMap (0x02920008188d <NativeContext[302]>)>
//  - type: JS_ARRAY_TYPE
//  - instance size: 16
//  - inobject properties: 0
//  - unused property fields: 0
//  - elements kind: PACKED_SMI_ELEMENTS
//  - enum length: invalid
//  - back pointer: 0x029200000011 <undefined>
//  - prototype_validity cell: 0x029200000a81 <Cell value= 1>
//  - instance descriptors #1: 0x02920008d5ed <DescriptorArray[1]>
//  - transitions #1: 0x02920008d609 <TransitionArray[5]>
//    Transitions #1:
//      0x029200000e55 <Symbol: (elements_transition_symbol)>: (transition to HOLEY_SMI_ELEMENTS) -> 0x02920008d625 <Map[16](HOLEY_SMI_ELEMENTS)>
//  - prototype: 0x02920008cfd5 <JSArray[0]>
//  - constructor: 0x02920008ccb1 <JSFunction Array (sfi = 00000292002577E9)>
//  - dependent code: 0x029200000755 <Other heap object (WEAK_ARRAY_LIST_TYPE)>
//  - construction counter: 0

// [1, 2, 3]
//----------------------------------------------------------------
//Arrays can continuous(Packed),Holey
//Each of them can be again:-
//SMI(Small Integer)
//Double (float, string, function)
//Packed element
//----------------------------------------------------------------
const arrTwo=[1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10]=11
// HOLEY_ELEMENTS
console.log(arrTwo);
// [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
// holes are very expensive
// When we search for something like arrTwo[21]
// Bound check happens as it is more than array length
// It fails, so undefined is returned
// Now, if we do arrTwo[9]
// Bound check happens ,it passes
// Now hasOwnProperty(arrTwo,9) happens to check if it exists
// Then HasOwnProperty(arrTwo.prototype,9) happens
// Then HasOwnProperty(Object,9) happens
// Finally we get undefined
// hasOwnProperty is a very expensive operation.
// ----------------------------------------------------------------
// Optimization:- 
// PACKED > HOLEY
// SMI > DOUBLE > PACKED
// HOLE_SMI > HOLE_DOUBLE > HOLE_PACKED

// IN A PACKED SMI array if we add 7.0(double), array becomes DOUBLE_PACKED, which is less optimized than PACKED SMI. Now even if we remove 7.0 , array won't be upgraded to SMI PACKED.
//----------------------------------------------------------------
const arrFour=new Array(3)
//3 holes so Holey_Smi_Elements
arrFour[0]='1' //HOLEY_ELEMENTS(Downgraded)
arrFour[1]='2' //HOLEY_ELEMENTS
arrFour[2]='3' //HOLEY_ELEMENTS

const arrFive=[]//better than arrFour
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS
//use in built for , forEach, for of as they are optimized
