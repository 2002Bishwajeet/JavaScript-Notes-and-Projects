//  create a Caear Cipher function
//
//  This function takes a string and a number and returns a new string
//  which is the result of rotating each letter in the old string by the
//  number of places specified.
//
//  For example, rotate("cheer", 7) would return the string "jolly"
//  because each letter in the string "cheer" is rotated 7 places to the
//  right in the alphabet.
//
function rotate(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    var newChar = String.fromCharCode(char.charCodeAt(0) + 13);
    newStr += newChar;
  }
  return newStr;
}

console.log(rotate("SERR PBQR PNZC"));