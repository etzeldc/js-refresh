// Initializes a blank new Object
var myObject = new Object();
document.getElementById('btn1').addEventListener('click', function() {
    myObject.firstName = 'david';   // adds a property and assigns a value
    myObject.company = 'gameSense';
    myObject.age = 31;
    console.log(myObject);
});

// Declares an Implicit Literal Object
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