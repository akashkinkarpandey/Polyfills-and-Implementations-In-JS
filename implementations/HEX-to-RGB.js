// way 1
// Input: "#ff33ff";
// Output: 255, 51, 255;
// This is for full hand notation
const getHexFromRgbShorthandNotation1=function(hex){
    let first=hex.slice(1,2)
    let second=hex.slice(2,3)
    let third=hex.slice(3,4)
    const r=parseInt(first+first,16)
    const g=parseInt(second+second,16)
    const b=parseInt(third+third,16)
    return {r,g,b}
}
const shorthandhex1="#f3f"
console.log(getHexFromRgbShorthandNotation1(shorthandhex1));

//for short hand notation 
const getHexFromRgbFullhandNotation1 = function (hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
};
const hex1 = "#ff33ff";
console.log(getHexFromRgbFullhandNotation1(hex1));

//way 2
const getHexFromRgbFullhandNotation2 = function (hex) {
  const arr=['r','g','b'];
  const matchedArrayFullNotation = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if(matchedArrayFullNotation){
      const rgb = matchedArrayFullNotation
        .slice(1)
        .reduce((prevValue, currentValue, index) => {
          prevValue[arr[index]] = parseInt(currentValue, 16);
          return prevValue;
        }, {});
      return rgb
  }
  const matchedArrayShortNotation = hex.match(
    /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i
  );
  if (matchedArrayShortNotation) {
    const rgb = matchedArrayShortNotation
      .slice(1)
      .reduce((prevValue, currentValue, index) => {
        prevValue[arr[index]] =17* parseInt(currentValue, 16);
        return prevValue;
      }, {});
    return rgb;
  }
};
const hex2 = "#ff33ff";
console.log(getHexFromRgbFullhandNotation2(hex2));
const shorthandhex2 = "#f3f";
console.log(getHexFromRgbFullhandNotation2(shorthandhex2));

