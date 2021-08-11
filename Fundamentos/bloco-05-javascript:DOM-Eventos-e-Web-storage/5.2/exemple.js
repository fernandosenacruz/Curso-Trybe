// requisitos parte 1
document.getElementById("elementoOndeVoceEsta").parentElement.style.backgroundColor = "brown";
document.getElementById("pai").firstElementChild.innerHTML = "Primeiro filho do filho";
document.getElementById("pai").firstElementChild;
document.getElementById("elementoOndeVoceEsta").parentNode;
document.getElementById("elementoOndeVoceEsta").parentElement.innerText;
document.getElementById("elementoOndeVoceEsta").nextElementSibling;
document.getElementById("pai").firstElementChild.nextSibling.nextSibling;

// requisitos parte 2
let pai = document.getElementById("pai");
pai.appendChild(document.createElement("section"));
document.getElementById("pai").lastChild.innerText = "Quinto Filho";

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
elementoOndeVoceEsta.appendChild(document.createElement("section"));
document.getElementById("elementoOndeVoceEsta").lastChild.innerHTML = "Terceiro filho do elemento onde você está.";

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.appendChild(document.createElement('h4'));
document.getElementById("primeiroFilhoDoFilho").lastChild.innerHTML = "Filho do primeiro filho do filho.";
document.querySelector("#primeiroFilhoDoFilho h4").style.backgroundColor = "yellow";

document.querySelector("#primeiroFilhoDoFilho h4").parentElement.parentElement.nextElementSibling;