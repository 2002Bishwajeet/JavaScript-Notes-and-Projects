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
function rot13(str) {

  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

rot13("SERR PBQR PNZC");