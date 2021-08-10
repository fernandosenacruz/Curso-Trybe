// requisito 1
let body = document.getElementsByTagName("body")[0];
body.appendChild(document.createElement("h1"));

// requisito 2
body.appendChild(document.createElement('main'));
let main = document.getElementsByTagName('main')[0];
main.className = "main-content";

// requisito 3
main.appendChild(document.createElement('section'));
let section = document.getElementsByTagName("section")[0];
section.className = "center-content";

// requisito 4
section.appendChild(document.createElement("p"));
let p = document.getElementsByTagName('p')[0];

// requisto 5
main.appendChild(document.createElement('section'));
let section2 = document.getElementsByTagName("section")[1];
section2.className = "left-content";

// requisito 6
main.appendChild(document.createElement('section'));
let section3 = document.getElementsByTagName("section")[2];
section3.className = "right-content";

// requisto 7
// https://www.codegrepper.com/code-examples/javascript/how+to+insert+image+in+javascript+code
let img = document.createElement("img");
img.src = "https://picsum.photos/200";
section2.appendChild(img);
img.className = "small-image";

// requisito 8

