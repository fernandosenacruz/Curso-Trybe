const select = document.getElementById("UF");
const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão,",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
let validos = document.getElementById('validos');
let invalidos = document.getElementById('invalidos');
let reset = document.querySelector('button[type="reset"]'); // busca pelo type // tb pode pegar outros com input etc.

function optionGenerate() {
  for (let index = 0; index < estados.length; index += 1) {
    let option = document.createElement("option");
    option.innerText = estados[index];
    option.className = "ufs";
    select.appendChild(option);
  }
}
optionGenerate();

let resumo = document.getElementById("resumo-perfil");
resumo.style.width = "100%";
let resumoCargo = document.getElementById("resumo-cargo");
resumoCargo.style.width = "100%";

function dateValidation(evt) {
  evt.preventDefault();
  let data = document.getElementById("data").value;
  if (!data.includes("/")) {
    alert("Erro! Data inválida.");
  }
  let ddmmaaa = data.split("/", 3);
  for (let index = 0; index < data.length; index += 1) {
    ddmmaaa[index] = parseInt(ddmmaaa[index]);
  }
  if (
    (ddmmaaa[0] <= 0) |
    (ddmmaaa[0] > 31) |
    (ddmmaaa[1] <= 0) |
    (ddmmaaa[1] > 12) |
    (ddmmaaa[2] < 0)
  ) {
    alert("Erro! Data inválida.");
  }
}

function ximira(evt) {
  dateValidation(evt);
  let formValue = document.getElementById('form');
  for (let index = 0; index < formValue.length; index += 1) {
    let infos = document.createElement('p');
    let infos2 = document.createElement('p');
    if(formValue[index].name === 'fieldset' || formValue[index].checked !== true && formValue[index].name === 'tipo'){
      continue
    }
    if(formValue[index].value === '' && formValue[index].type !== 'submit' && formValue[index].type !== 'reset'){
      infos2.innerHTML = formValue[index].name + " : campo inválido";
      invalidos.appendChild(infos2);
    }
    infos.innerHTML = formValue[index].value;
    validos.appendChild(infos);
    console.log(formValue[index].value)
  }
}

function sendButton() {
  let enviar = document.getElementById("botao-enviar");
  enviar.addEventListener("click", ximira);
}
sendButton();

function clearDiv() {
  reset.addEventListener('click', function (){
    validos.removeChild(document.querySelectorAll('div p'));
    invalidos.removeChild(document.querySelectorAll('div p'));
  });
}
clearDiv()