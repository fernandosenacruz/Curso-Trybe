var base = 5, altura = 8;
var area = base * altura;

console.log(area);

var perimetro = Math.hypot(base, altura)+base+altura;

console.log(perimetro);

var nota = 110;

if (nota >=80 && nota<=100) {
console.log("Parabéns! Você foi aprovado(a).")
}else if (nota >=60 && nota<80) {
console.log("Você está na nossa lista de espera.")
}           else if (nota <60 && nota>=1) {
console.log("Você foi reprovado(a).")
}else{
console.log(null)
}

var situacaoCandidato = "reprovado"

switch (situacaoCandidato) {
    case "aprovado":
        console.log("Parabéns! Você foi aprovado(a).");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera.");
        break;
    case "reprovado":
        console.log("Você foi reprovado(a).");
        break;
    default:
        console.log("Situação do(a) candidato(a) não identificada.")
}