//  create a function to convert a given number to a roman numeral
//  and return it
function convertToRoman(num) {
    var romanNumeral = "";
    var ints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var nums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var i = 0;
    while (num > 0) {
        while (num >= ints[i]) {
            num -= ints[i];
            romanNumeral += nums[i];
        }
        i++;
    }
    return romanNumeral;
   }
   
  console.log( convertToRoman(36));


