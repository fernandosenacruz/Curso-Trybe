function changeText(changeP){
    document.getElementsByTagName(changeP)[1].innerHTML = "Em dois anos projeto estar atuante no mercado de trabalho desempenhando minha função com empenho, dedicação e criando um networking sólido com parcerias que agreguem em meu crescimento pesoal e profissional."
};
changeText("p");

function ximbinha(nameClass,color){
    document.getElementsByClassName(nameClass)[0].style.backgroundColor = color;
}
ximbinha("main-content","rgb(76,164,109)");

ximbinha("center-content", "white");

function changeTag(tag,text){
    document.getElementsByTagName(tag)[0].innerHTML = text;
}
changeTag("h1","Texto mudado.");


function upperCase(paragraph){
    document.getElementsByTagName(paragraph)[1].style.textTransform = "uppercase";
};
upperCase("p");

function print(p){
    let ximira = document.getElementsByTagName(p);
    for (let index = 0; index < ximira.length; index += 1) {
        console.log(ximira[index].innerText);
    }
}
print("p");