name = prompt("Please enter your name");
alert("Welcome " + name + "!");
var a = 10;
a = true;
alert(a);
a = "Hello world";
alert(a);
function runMe() {
  var un = document.getElementById("name").value;
  var pw = document.getElementById("pass").value;

  alert("Username: " + un + " Password: " + pw);
  alert(document.getElementById("output").innerHTML);
  var a = "change this ";
  document.getElementById("output").value.innerHTML = a;
  document.getElementById("btn1").value = "submit";
}
