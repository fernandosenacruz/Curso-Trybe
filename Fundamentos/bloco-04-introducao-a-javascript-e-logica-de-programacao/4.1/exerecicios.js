/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/
var a = 5, b = 8;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log();

/*Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.*/
a= 10 , b = 20;

if(a>b){
    console.log(a);
}else if(a<b) {
    console.log(b)
}else{
    console.log(a + " é igual a " + b)
}
console.log();

/*Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/

let c = 100;
a= 50, b= 80;

if(a>b && a>c){
    console.log(a)
}else if (b>a && b>c){
    console.log(b)
}else{
    console.log(c)
}
console.log()

/*Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

a = -5;

if(a>0){
    console.log("Positive")
}else if (a<0){
    console.log("Negative")
}else{
    console.log("Zero")
}
console.log()

/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

a = 100, b= 40, c=40;

if(a+b+c==180){
    console.log(true)
}else if (a<0 || b<0 || c<0){
    console.log("Erro!")
}else{
    console.log(false)
}
console.log();

/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)*/
let pecasXadres = "King"

switch (pecasXadres){
    case "king".toString():
        console.log("Todas as direções 1 casa.")
        break;
    case "queen".toUpperCase():
        console.log("Todas as direções sem limite de casas")
        break;
    case "bishop".toUpperCase():
        console.log("Diagonais")
        break;
    case "horse".toUpperCase():
        console.log("em L")
        break;
    case "tower".toUpperCase():
        console.log("em cruz.")
        break;
    case "pawn".toUpperCase():
        console.log("para frente 1 casa e come nas diagonais.")
        break;
    default:
    break;
}
console.log();

/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let percentual = 50;

switch (percentual){
    case percentual >= 90:
        console.log("A")
        break;
    case percentual >= 80:
        console.log("B")
        break;
    case percentual >= 70:
        console.log("C")
        break;
    case percentual >= 60:
        console.log("D")
        break;
    case percentual >= 50:
        console.log("E")
        break;
    case percentual <50:
        console.log("F")
        break;
    case percentual <0 || percentual> 100:
        console.log("Erro!")
        break;
    default:
    break;
}
console.log();

/*Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

a = 1, b = 2, c = 3;

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log(true)
}else{
    console.log(false)
}
console.log();



/*Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

a = 8, b = 2, c = 6;

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    console.log(true)
}else{
    console.log(false)
}
console.log();


/*Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let custoProduto = 100;
let imposto = custoProduto*20/100;
let valorCustoTotal = custoProduto + imposto;
let valorProduto = 130;
let lucro = valorProduto - valorCustoTotal;

if(custoProduto < 0 || valorProduto < 0){
    console.log("Erro!")
}else{
    console.log(lucro*1000);
}
console.log();


/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?*/

let salarioBruto = 3000.00;
let INSS;

switch (INSS){
    case salarioBruto <= 1556.94:
        INSS = salarioBruto * 8 / 100;
        break;
    case salarioBruto > 1556.94 && salarioBruto <= 2594.92:
        INSS = salarioBruto * 9 /100;
        break;
    case salarioBruto > 2594.92 && salarioBruto <= 5189.82:
        INSS = salarioBruto * 11 /100;
        break;
    case salarioBruto > 5189.82:
        INSS = 570.88;
        break;
    default:
        break;
}

let salarioBase = salarioBruto - INSS;
let IR;

switch (IR){
    case salarioBase <= 1903.98:
        IR = 0;
        break;
    case salarioBase > 1903.98 && salarioBase <= 2826.65:
        IR = (salarioBase * 7.5 /100) - 142.80;
        break;
    case salarioBase > 2594.92 && salarioBase <= 3751.05:
        IR = (salarioBase * 15 /100) - 354.80;
        break;
    case salarioBase > 3751.05 && salarioBase <= 4664.68:
        IR = (salarioBase * 22.5 / 100) - 636.13;
        break;
    case salarioBase > 4664.68:
        IR = (salarioBase * 27.5 / 100) - 869.36;
        break;
    default:
        break;
}

let salarioLiquido = salarioBruto - IR - INSS;

console.log(salarioLiquido);