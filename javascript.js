document.getElementById("clickMe").onclick = function (){
  alert('helo');
};
var el = document.getElementById("clickMe");
if (el.addEventListener)
el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
el.attachEvent('onclick',doFunction);


 
     
      