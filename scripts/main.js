const myCount = document.querySelector('#text-display'); 
let newCount = 0;
function count(){
    newCount = newCount +1;
    myCount.textContent = "You have " +newCount+ " notes";
}


  function myFunction() {
    var note = prompt("Write your note:");
    if (note != null) {
      document.getElementById("demo").innerHTML = " " + note + " ";
    }
  }
  