//  objects are just collections of key-value pairs. In other words, they are pieces of data (values)
//  mapped to unique identifiers called properties (keys). 


//  This is how you create an object
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };


  tekkenCharacter.origin = 'South Korea'; // This is how you can add an additional property or change then(if exists)

  tekkenCharacter['hair color'] = 'dyed orange'; // Also you can add/ access the property like this too

//   The First one is dot notation the latter is bracker notation
//  Dot Notation is useful if the key is single worded
//  bracket notation is helpful when the key is multiworded

// We can also keep an object within an object

//  To delete an property from the object we use delete keyword

//  Example
delete tekkenCharacter.player;

// what if we just wanted to know if an object has a specific property?
// JavaScript provides us with two different ways to do this. 
// One uses the hasOwnProperty() method and the other uses the in keyword.
// If we have an object users with a property of Alan,
//  we could check for its presence in either of the following ways:

//  here users is an object which contains objects of objects
users.hasOwnProperty('Alan'); // -> ek yeh method
'Alan' in users; // -> ek yeh 
// Apki choice konsa use karna hai


// Sometimes you may need to iterate through all the keys within an object.
//  This requires a specific syntax in JavaScript called a for...in statement.
//  For our users object, this could look like:

//  This is basic for loop but in a different way . here we are iterating through objects
for (let user in users) { // here user is variable 
  console.log(user);
}

/* We can also generate an array which contains all the keys stored in an object using the Object.keys() 
method and passing in an object as the argument. This will return an array with strings
representing each property in the object. Again, there will be no specific order to the entries in the array.
*/

