//  This is how you create an object
let dog = {
  name: "Spot",
  numLegs: 4,
};
dog.name; // This is how you access the properties of objects
console.log(dog.name);
/* 
While this is a valid way to access the object's property, 
there is a pitfall here. If the variable name changes,
any code referencing the original name would need to be updated as well.
In a short object definition, it isn't a problem,
but if an object has many references to its properties there is a greater chance for error.

toh this.name karlo . thats better

*/


/* 
Constructors are functions that create new objects.
They define properties and behaviors that will belong to the new object.
Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

*/
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
/*
This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. 

Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, 
this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might.
*/
//  This is parametric Constructor 
//  Also this is purana way of creating constructor
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }

/* 
A better way is to use the prototype of Bird. 
Properties in the prototype are shared among ALL instances of Bird.

Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;
Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);
console.log(canary.numLegs);

*/
 