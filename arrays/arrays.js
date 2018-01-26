// Declares an Implicit Literal Array
var myArrayA = ["one", 1, "Two", 2, 55, "four"]; // implicit literal array
// console.log(myArrayA[0]); ...logs first item
console.log(myArrayA);

// Declares a new Array...less preferrable fashion
var myArrayB = new Array("one", "two", 55, "four");
// console.log(myArrayB[2]); ...logs third item
console.log(myArrayB);

// Declares a blank Array with X slots
var myArrayC = new Array(5); // creates five empty slots
console.log(myArrayC);

var myArrayD = ["xone", "xa", 3, "two", 545, "xfour"];
console.log(myArrayD);

// PUSH to an Array (adds to end of Array)
document.getElementById('btn1').addEventListener('click', function () {
    myArrayA.push("five");
    console.log(myArrayA);
    myArrayB.push("five");
    console.log(myArrayC);
    myArrayC.push("five");
    console.log(myArrayC);
});

// Find LENGTH of an Array
document.getElementById('btn2').addEventListener('click', function () {
    console.log(myArrayA, myArrayA.length);
    console.log(myArrayB, myArrayB.length);
    console.log(myArrayC, myArrayC.length);
});

// POP from an Array (takes away from end of Array)
document.getElementById('btn3').addEventListener('click', function () {
    myArrayA.pop();
    console.log(myArrayA);
    myArrayB.pop();
    console.log(myArrayB);
    myArrayC.pop();
    console.log(myArrayC);
});

// SHIFT an Array (takes away first item of Array, shifts the rest)
document.getElementById('btn4').addEventListener('click', function () {
    myArrayA.shift();
    console.log(myArrayA);
    myArrayB.shift();
    console.log(myArrayB);
    myArrayC.shift();
    console.log(myArrayC);
});

// INDEX OF an Array (searches for a specific value's position within an Array)
    // (if value isn't present, -1 is returned)
document.getElementById('btn5').addEventListener('click', function () {
    console.log(myArrayA.indexOf("four"));
    console.log(myArrayB.indexOf("four"));
    console.log(myArrayC.indexOf("four"));
});

// SPLICE an Array (removes multiple items from Array)
document.getElementById('btn6').addEventListener('click', function () {
    myArrayA.splice(2, 1); // "...splice(starting position, # of items to remove)"
    console.log(myArrayA);
    myArrayB.splice(2, 1);
    console.log(myArrayB);
    myArrayC.splice(2, 1);
    console.log(myArrayC);
});

// UNSHIFT an Array (adds specific value/s to beginning of Array, shifts the rest)
document.getElementById('btn7').addEventListener('click', function () {
    myArrayA.unshift("THREE");
    console.log(myArrayA);
    myArrayB.unshift("THREE");
    console.log(myArrayB);
    myArrayC.unshift("THREE");
    console.log(myArrayC);
});

// SORT an Array (orders the items by increasing numbers, then alphabetically with uppercases first)
document.getElementById('btn8').addEventListener('click', function() {
    console.log(myArrayA.sort());
    console.log(myArrayB.sort());
    console.log(myArrayC.sort());
});

// REVERSE an Array (orders the items by alphabet backwards with lowercases first, then decreasing numbers)
document.getElementById('btn9').addEventListener('click', function() {
    console.log(myArrayA.reverse());
    console.log(myArrayB.reverse());
    console.log(myArrayC.reverse());
});

// CONCATENATE an Array (basically 'pushes' an entire Array to the end of another)
var myArrayE = myArrayA.concat(myArrayD);
document.getElementById('btn10').addEventListener('click', function () {
    console.log(myArrayE);
});

// Arrays into STRINGS
document.getElementById('btn11').addEventListener('click', function () {
    console.log(myArrayA.toString());
    console.log(myArrayB.toString());
    console.log(myArrayC.toString());
    console.log(myArrayD.toString());
});

// Arrays into STRINGS W/ SEPARATORS
document.getElementById('btn12').addEventListener('click', function () {
    console.log(myArrayA.join(" :) ")); // ...adds ' :) ' between each item in the string
    console.log(myArrayB.join(" :) "));
    console.log(myArrayC.join(" :) "));
    console.log(myArrayD.join(" :) "));
});

// SLICE an Array (returns a segment of an Array based on specified indexes)
document.getElementById('btn13').addEventListener('click', function () {
    console.log(myArrayE);
    console.log(myArrayE.slice(2,5)); // "...slice(starting postion, stopping position)"
    // Slice doesnt include stopping point, so this returns values of indexes 2-4
});