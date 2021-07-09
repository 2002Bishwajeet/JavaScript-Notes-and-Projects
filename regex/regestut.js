let myString = 'Hello World';
let myregex = /Hello/;  // yaha pe quotation nhi aaenge this var contains to find the particular word

let result = myregex.test(myString); // jiska check karna hai jo / word / mein hai woh pehle aata hai

console.log(result);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // | line is basically OR agar in 4 words se koi bhi mil jae toh balle balle (true return kardena)
let result2 = petRegex.test(petString);

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Yaha pe i for ignoring the case kuch bhi ho upper case ya lower case mile toh bas bata dena
let result = fccRegex.test(myString);

console.log(result);


let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex); // Match gives the output agar mila toh like this [outpur]

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); // isme repaeted milenge cause /g daal diya

//  these are basically called flags . And as usual we can have multiple flags

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line  // yaha dot before un mtlb koi bhi ho bata dio
let result = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
// [] for telling agar inme se kuch bhi mile toh bata dena 

//  better using this example
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);



// Like this ek range se numbers dhoondh sakte hai
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// To create a negated character set,
//  you place a caret character (^) after the opening bracket and before the characters you do not want to match.

//  This is the example
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou1-9]/gi; // ^ this is negation character it ignores these stuffs . agar bina 
// square bracket ke daal it wil ignore in the starting 
let result = quoteSample.match(myRegex); // Change this line

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Yaha + for finding s in continuous row basically finding a pattern
let result = difficultSpelling.match(myRegex);

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; // Yaha pe go* ka mtlb to look for character zero or more times 
soccerWord.match(goRegex); // ["goooooooo"],  This is their output
gPhrase.match(goRegex);    // ["g"]  This is their output
oPhrase.match(goRegex);  //null   This is their output

// A greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. 
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// However, you can use the ? character to change it to lazy matching.
//  "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].


//  To search the end of strings using the dollar sign character $ at the end of the regex.

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/; // It is the short form of Longhand and yes + for finding in continuous
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// You can search for the opposite of the \w with \W. \W for negation and \w for finding them
// Note, the opposite pattern uses a capital letter. 
// This shortcut is the same as [^A-Za-z0-9_].

// The shortcut to look for digit characters is \d, with a lowercase d. 
// This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

// The shortcut to look for non-digit characters is \D.
//  This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

// Let's Create a program to restrict possible Usernames
/* 
1. Usernames can only use alpha-numeric characters.

2. The only numbers in the username have to be at the end. 
There can be zero or more of them at the end.
 Username cannot start with the number.

3. Username letters can be lowercase and uppercase.

4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
// let userCheck = /\w\d$/i; // Proposed way of thinking
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Actual way of doing it
/* 
1. ^ - start of input
2. [a-z] - first character is a letter
3. [a-z]+ - following characters are letters
4. \d*$ - input ends with 0 or more digits
5. | - or
6. ^[a-z] - first character is a letter
7. \d\d+ - following characters are 2 or more digits
8. $ - end of input

*/
let result = userCheck.test(username);

/* 
You can search for whitespace using \s, which is a lowercase s.
This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
You can think of it as similar to the character class [ \r\t\f\n\v].
*/
// Example
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/* 
Search for non-whitespace using \S, which is an uppercase s.
This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
You can think of it being similar to the character class [^ \r\t\f\n\v].
*/

// Example
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);