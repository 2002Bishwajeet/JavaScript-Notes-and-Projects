let array = [] // iske andar kuch bhi daal sakte ho 
//  different types ke bhi daal sakte ho ek saath like bool string number object in one array

// How to push elements in an array after declaring

//  There are two methods .push() and .unshift()

// .push() pushes elements at the end of array

//  .unshift() pushes elements at the start of array

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
romanNumerals.push(twentyThree);
//  This is the example


//  To remove items from array 

//  We use .pop() and .shift()

// .pop() removes the items from the end of the array
// .shift() removes the items from the beginning of the array. simple as that

//  Let's see an example

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
greetings.shift();


// but what if you want to remove item from in between the array

//  for this we use .splice()

/* 
splice() can take up to 3 parameters, but for now, we'll focus on just the first 2.
The first two parameters of splice() are integers which represent indexes, or positions, 
of the array that splice() is being called upon. And remember, arrays are zero-indexed, 
so to indicate the first element of an array, we would use 0. splice()'s first parameter represents
the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. 
*/

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// Here we remove 2 elements, beginning with the third element (at index 2).
//  array would have the value ['today', 'was', 'great'].

//  We can also add items using .splice()

//  you can use the third parameter, comprised of one or more element(s), to add to the array. 
// This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

/* 
The next method we will cover is slice(). Rather than modifying an array,
slice() copies or extracts a given number of elements to a new array,
leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to
begin extraction, and the second is the index at which to 
stop extraction (extraction will occur up to, but not including the element at this index).

*/
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

/*
JavaScript provides us with another built-in method, indexOf(), that allows us
to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter,
 and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
*/

//  Like this 
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // -1
fruits.indexOf('oranges'); // 2
fruits.indexOf('pears'); // 1

//  Let's create complex multi-dimensional Arrays
let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];
//    Hum ese khatarnak level ki nesting kar sakte hai

let myNestedArray = [
    // Only change code below this line
    'level 1',                   /* myNestedArray[0]             */
    ['level 2'],	               /* myNestedArray[1][0]          */
    [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
    [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
    [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
    // Only change code above this line
  ];