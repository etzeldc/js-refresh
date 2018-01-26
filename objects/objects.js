// Initializes a blank new Object
var myObject = new Object();
document.getElementById('btn1').addEventListener('click', function() {
    myObject.firstName = 'david';   // adds a property and assigns a value
    myObject.company = 'gameSense';
    myObject.age = 31;
    console.log(myObject);
});

// Initializes an Implicit Literal Object
var myObjectA = {
    firstName: 'Dave',  // {"property: value", "property: value"}
    company: 'Uber',
    age: 32
};
document.getElementById('btn2').addEventListener('click', function() {
    console.log(myObjectA);
});

// Calls an Object's value by property
document.getElementById('btn3').addEventListener('click', function () {
    console.log(myObjectA['firstName']); // uses a string of a property name like an index
    console.log(myObjectA.firstName); // more dynamic, but same effect
});

// Initializes an object using a function
var myObjectB = new myInfo('David', 'Lyft', 31); // sets variable object to a initializing function (w/ 3 args)
function myInfo(a, b, c) {
    this.firstName = a; // "this" is specific to the object calling this function
    this.company = b;
    this.age = c;
};
document.getElementById('btn4').addEventListener('click', function () {
    console.log(myObjectB);
    console.log(myObjectB.age);
});
