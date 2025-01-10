// Input: 255, 51, 255;
// Output: "#ff33ff";
//way 1
const RGBtoHEX1=function({r,g,b}){
    const componentToHex=function(color){
        const getCode = color.toString(16);
        if(getCode.length==1)
            return "0"+getCode
        return getCode
    }
    const hex =
      "#" +
      componentToHex(r) +
      componentToHex(g) +
      componentToHex(b);
    return hex;
}
console.log(RGBtoHEX1({r:255,g:51,b:255}));
//way 2
const RGBtoHEX2 = function ({ r, g, b }) {
  const hex = "#" + [r,g,b].map((color=> color.toString(16).padStart(2,'0'))).join("");
  return hex;
};
console.log(RGBtoHEX2({ r: 255, g: 51, b: 255 }));
//way 3
const RGBtoHEX3 = function ({ r, g, b }) {
  const hex = ((1<<24)+(r<<16)+(g<<8)+(b<<0)).toString(16).slice(1);
  return '#'+hex;
};
console.log(RGBtoHEX3({ r: 255, g: 51, b: 255 }));