// A Function to convert Fahrenheit to celsius
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (9 * celsius) / 5 + 32;
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
  return str.split("").reverse().join("");

  // Split yaha pe string ko array ke form mein convert kar deta
  // reverse ulta kar deta and join uss array ko jodke String banadeta waapis
}

// Function to Factorize a number
function factorialize(num) {
  var sum = 1;
  for (let i = 1; i <= num; i++) sum *= i;
  return sum;
  //Approach2
}

function factorialize2(num) {
  if (num === 1) return 1;
  return factorialize(num - 1) * num;
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
  let words = str.split(" ");
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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      max = Math.max(max, arr[i][j]);
    }
    ar.push(max);
    max = -100000;
  }
  return ar;
}

//   console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

//  This function checks the character/word given kya usse woh end ho rha hai ya nhi !!!
function confirmEnding(str, target) {
  return str.endsWith(target);
  // Yeh ES2015 method hai but hume ek standard way mein karna hai
}

function confirmEnding2(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding2("Bastian", "n");

//  This function repeat a string given number of times
function repeatStringNumTimes(str, num) {
  // This is mentos zindagi
  return str.repeat(num);
}

function repeatStringNumTimes2(str, num) {
  //  This is normal zindagi
  var accumulatedStr = "";
  //  ek loop chla di aur usme str ki value daalte gyee
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

//  Function to truncate a string after a given amount of length
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// Finders keepers - ek function which takes a function and an array bas jo function mein pass kara
//  woh agar true hua  toh woh return karo nhi toh undefined

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
  if (num === 0) return undefined;
}

//  This function captilize every word of the sentence
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  // pehlle sab lowercase kar rhe phor replace function se every word's first character replace kar rhe
}

//  This Function remove falsy values from the array
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]); // normal if condition se hi pta chl jaega ki arrays mein value falsy hai ya nhi
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

//  Function to copy one array contents to other from the given index
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

// Return the lowest index at which
// a value (second argument) should be inserted into an array (first argument) once it has been sorted.
//  The returned value should be a number.
function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

// a function that splits an array (first argument) into groups the
//  length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
