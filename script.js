var topico1 = {titulo: "Introdução à Internet e à Web" , assunto: "Como funciona a Web"};
var topico2 = {titulo: "Os Pilares do Front-End" , assunto: "HTML, CSS, JavaScript"};

var topicos = [topico1, topico2];

var listaTopico = document.getElementById("listaTopicos");

var ulTopico = document.createElement("UL");



for(topico of topicos){
    var liTopico = document.createElement("LI");
    liTopico.setAttribute('style', 'white-space: pre;');
    liTopico.textContent = `Topico: ${topico.titulo}` + "\n";
    liTopico.textContent += `Assunto: ${topico.assunto}` + "\n\n";
    ulTopico.appendChild(liTopico);
}

listaTopico.appendChild(ulTopico);
