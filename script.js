var counterH = 1;
var counterD = 1;

function addHobbie(divName){
  var newdiv = document.createElement('div');
  newdiv.innerHTML = "Hobbie " + (counterH + 1) + " <input type='text' name='myInputs[]'>";
  document.getElementById(divName).appendChild(newdiv);
  counterH++;
}

function addDuvida(divName){
  var newdiv = document.createElement('div');
  newdiv.innerHTML = "Duvida " + (counterD + 1) + " <input type='text' name='myInputs[]'>";
  document.getElementById(divName).appendChild(newdiv);
  counterD++;
}
