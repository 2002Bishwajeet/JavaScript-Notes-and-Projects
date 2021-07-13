// Create a palindrome checker.
function palindromeChecker(str) {
    // remove spaces and special characters from the string
    str = str.replace(/[^a-z0-9]/gi, '');
    // convert the string to lowercase
    str = str.toLowerCase();
    var i = 0;
    var j = str.length - 1;
    var isPalindrome = true;
    while (i < j) {
        if (str[i] !== str[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    return isPalindrome;
}