// Showing document directory in the console
document.getElementById('btna').addEventListener('click', function() {
    console.dir(document);
});

// Showing an element's directory in the console
var myOutput = document.getElementById('btn1');
document.getElementById('btnb').addEventListener('click', function() {
    console.dir(myOutput);
});

// Changing an element's innerHTML ***innerText will show html code if present
document.getElementById('btnc').addEventListener('click', function() {
    myOutput.innerHTML = "Click what now?";
});