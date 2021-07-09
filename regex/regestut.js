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