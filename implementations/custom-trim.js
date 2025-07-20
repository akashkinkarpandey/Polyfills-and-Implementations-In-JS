String.prototype.myTrim=function(){
    if (typeof this !== "string") {
      throw new TypeError("Expected a string");
    }

  const toBeRemovedChars = [" ", "\n", "\t", "\r"];
  //const isWhiteSpaceChar = (char) => /\s/.test(char);
  const isWhiteSpaceChar = (char) => toBeRemovedChars.includes(char);
  let startIndex = 0;
  let endIndex = this.length - 1;
  while (startIndex <= endIndex && isWhiteSpaceChar(this[startIndex])) {
    startIndex++;
  }
  while (endIndex >= startIndex && isWhiteSpaceChar(this[endIndex])) {
    endIndex--;
  }
  return this.slice(startIndex, endIndex + 1);
}
console.log("   Hello World!   ".myTrim()); // "Hello World!"
console.log("   \n\tHello World!   \r".myTrim()); // "Hello World!"
console.log("NoSpaces".myTrim()); // "NoSpaces"
console.log("   \t  ".myTrim()); // ""
console.log("".myTrim()); // ""
const obj={}
console.log(obj.myTrim()); // ""

