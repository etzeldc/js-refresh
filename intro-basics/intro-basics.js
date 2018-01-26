//alert('sup yo?');

// Alert Button Three JS
document.getElementById('btn3').addEventListener('click', function() {
    alert('hello 3');
});


// Prompt Button One JS
document.getElementById('btn4').addEventListener('click', function() {
    prompt('what is your name?');
});

// Prompt Button Two JS
    // to store a response, set it to a variable and log that variable
document.getElementById('btn5').addEventListener('click', function() {
    var myName = prompt('what is your name?');
    console.log(myName);
});

// Prompt Button Three JS
    // note var myName above is local to that function...
    // while var otherName is global so it can be used by separate functions
var otherName = '';
document.getElementById('btn6').addEventListener('click', function () {
    otherName = prompt('what is your other name?');
});

// Prompt Button Four JS
document.getElementById('btn7').addEventListener('click', function () {
    console.log(otherName);
});