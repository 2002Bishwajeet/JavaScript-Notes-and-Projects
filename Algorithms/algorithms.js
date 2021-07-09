// A Function to convert Fahrenheit to celsius
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (9*celsius)/5+32;
    return fahrenheit;
}   

// console.log(convertToF(30));

// A function to reverse a String
// We will do this in 2 methods
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
      }
      return reversedStr;
    //    in  this method ek alag variable banaya khaali initialised hai and phir ulti loop
    //  chla ke uss variable ko bhar rhe hai
}

//  METHOD 2 for reverse a String

function reverseString2(str) {
    return str
    .split("")
    .reverse()
    .join("");

    // Split yaha pe string ko array ke form mein convert kar deta 
    // reverse ulta kar deta and join uss array ko jodke String banadeta waapis
}  


// Function to Factorize a number
function factorialize(num) {
    var sum = 1;
    for(let i =1 ;i<=num;i++)
    sum*=i;
    return sum;
    //Approach2
  
  }

function factorialize2(num) {
  if(num===1)
    return 1;
    return factorialize(num-1)*(num);
}

//  Function to find the longest word in the string
function findLongestWordLength(str) {
    // let i = 0;
    // let max = 0;
    // let curr = 0
    // //  iss waale mein kuch problem hai baad mein dekhte hai
    // while(i<str.length-1)
    // {
    //     if(str[i]!=" ")
    //     {
    //         curr++;
    //     }
    //     else
    //     {
    //         max = Math.max(max,curr);
    //         curr =0;
    //     }
    //     i++;
    // }
    // return max;
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  
//   console.log(findLongestWordLength("What if we try a word such as otorhinolaryngology"));


// Function Return Larges number in arrays
function largestOfFour(arr) {
    var max = -10000;
    var ar = [];
    for(let i = 0; i<arr.length;i++)
     { for(let j = 0;j<arr[i].length;j++)
     { max = Math.max(max,arr[i][j]);
     }
      ar.push(max);
      max = -100000;
     }
     return ar;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));