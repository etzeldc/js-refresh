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