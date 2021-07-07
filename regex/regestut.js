let myString = 'Hello World';
let myregex = /Hello/;  // yaha pe quotation nhi aaenge this var contains to find the particular word

let result = myregex.test(myString); // jiska check karna hai jo / word / mein hai woh pehle aata hai

console.log(result);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // | line is basically OR agar in 4 words se koi bhi mil jae toh balle balle (true return kardena)
let result = petRegex.test(petString);