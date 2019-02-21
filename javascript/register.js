
// function test() {
//     //alert(document.getElementById('name').value);
//     // alert(document.getElementById('password').value);
//     // alert(document.getElementById('country').value);
//     console.log(document.getElementsByClassName('form-control'));

    
// }

var x = document.getElementById('fname');
console.log(x);

function hello() {
    this.myname = "koushik";
};
hello();
var x = new hello();
var y = x;
y.myname = "mani";
console.log(y.myname);