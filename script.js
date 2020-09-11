document.getElementById("botaoHobbies").addEventListener("click", function(){
    myFunction("hobbies", "listaH");
});

document.getElementById("botaoDuvidas").addEventListener("click", function(){
    myFunction("duvidas", "listaD");
});

function myFunction(input, list) {
    var entrada = document.getElementById(input);
    var texto = document.createTextNode(entrada.value);
    var li = document.createElement("LI");

    li.appendChild(texto);

    var lista = document.getElementById(list);
    lista.appendChild(li);

    entrada.value = "";
}
