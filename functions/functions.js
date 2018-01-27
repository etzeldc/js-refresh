// Declaring/Calling a Function
function myFunction1() { // function functionName(arg) {code block};
    console.log('function is called');
};
document.getElementById('btn1').addEventListener('click', function () {
    myFunction1(); // calls that function
});

// Functions with arguments
function myFunction2(a) {
    console.log('function is called. passed value ' + a);
};
document.getElementById('btn2').addEventListener('click', function () {
    myFunction2(34);
    myFunction2('gizmo');
    myFunction2();
});

// More Fuction stuff
var b = 1;
function myFunction3(a) {
    b++; // shorthand for increase by one
    console.log(b + ' function is called. passed value ' + a);
};
document.getElementById('btn3').addEventListener('click', function () {
    myFunction3(34);
    myFunction3('gizmo');
    myFunction3();
});

// Calculations
function myCalculation(a) {
    return (a + b);
}
document.getElementById('btn4').addEventListener('click', function () {
    console.log(myCalculation(45));
    console.log(myCalculation(13));
    console.log(myCalculation(72));
    console.log(myCalculation(8));
});

// Calculations with extra values
function myCalculationX(a, c) {
    var d = a + b + c;
    b++;
    return (a * c) + " " + d;
}
document.getElementById('btn5').addEventListener('click', function () {
    console.log(myCalculationX(4, 3));
    console.log(myCalculationX(13, 2));
    console.log(myCalculationX(21, 5));
    console.log(myCalculationX(7, 7));
});

// Functions to update Objects
var myObj = { // creates an implicitly literal object
    firstName: "David",
    lastName: "Etzel"
};
function  f(g) { // argument 'g' (the object) will pass through and be updated
    g.courses = 'JavaScript'; //updated by adding a new property
}
document.getElementById('btn6').addEventListener('click', function () {
    console.log(myObj);
    f(myObj);
    console.log(myObj);
});   