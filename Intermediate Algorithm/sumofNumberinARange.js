//  This function gives a sum of numbers of a given range
function sumAll(arr) {
    let sum = 0 ;
    arr.sort((a, b) => a - b)
    for(let i = arr[0] ; i<=arr[1];i++)
    sum+=i;
    return sum;
   }
   
 console.log(  sumAll([5, 10]));