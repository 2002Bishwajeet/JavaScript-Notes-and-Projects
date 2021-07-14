//  Create a function which validates a telephone number.
//  The telephone number is passed in as a string.
//  The function returns true if the telephone number is valid, false otherwise.
//  The telephone number is valid if it is a string of 10 digits.
//  The function should not accept any other type of input.
function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

if (rex1.test(str)) {
    return true;
}
else {
    return rex2.test(str) ? true : false
}
}

/* 
     var telRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (telRegex.test(str)) {
        return true;
    } else {
        return false;
    }

*/

telephoneCheck("555-555-5555");