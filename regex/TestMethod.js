let myString = 'Hello World';
let myregex = /Hello/;  // yaha pe quotation nhi aaenge this var contains to find the particular word

let result = myregex.test(myString); // jiska check karna hai jo / word / mein hai woh pehle aata hai

console.log(result);