function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function addDays() {
  let ulList = document.getElementById("days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let emptyList = document.createElement("li");
    if ((dezDaysList[index] === 24) | (dezDaysList[index] === 31)) {
      emptyList.innerText = dezDaysList[index];
      emptyList.className = "day holiday";
      ulList.appendChild(emptyList);
    } else if (
      (dezDaysList[index] === 4) |
      (dezDaysList[index] === 11) |
      (dezDaysList[index] === 18)
    ) {
      emptyList.innerText = dezDaysList[index];
      emptyList.className = "day friday";
      ulList.appendChild(emptyList);
    } else if (dezDaysList[index] === 25) {
      emptyList.innerText = dezDaysList[index];
      emptyList.className = 'day friday holiday';
      ulList.appendChild(emptyList);
    } else {
      emptyList.innerText = dezDaysList[index];
      emptyList.className = "day";
      ulList.appendChild(emptyList);
    }
  }
}
addDays(); // 1 ok

function addHolidaysButton() {
  let holidays = document.querySelector(".buttons-container");
  let benjamimButton = document.createElement("button");
  benjamimButton.id = "btn-holiday";
  benjamimButton.innerText = "Feriados";
  holidays.appendChild(benjamimButton);
}
addHolidaysButton(); //2 ok

let buttomHoliday = document.querySelector("#btn-holiday");
let feriado = document.querySelectorAll(".holiday");

function changeBackgroundColor() {  
  for (let index = 0; index < feriado.length; index += 1) {
    if (feriado[index].style.backgroundColor != 'red') {
      feriado[index].style.backgroundColor = "red";
    } else {
      feriado[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}
buttomHoliday.addEventListener("click", changeBackgroundColor); // 3 ok

function addFridayButton() {
  let friday = document.querySelector(".buttons-container");
  let benjamimButton = document.createElement("button");
  benjamimButton.id = "btn-friday";
  benjamimButton.innerText = "Sexta-Feira";
  friday.appendChild(benjamimButton);
}
addFridayButton(); // 4 ok

let sexta = document.querySelectorAll(".friday");
let valorSexta = [];

function pushFridayArray(){
  for (let index = 0; index < sexta.length; index += 1) {
    valorSexta.push(sexta[index].innerHTML); 
  }
  return valorSexta;
}

function changeInnerText(valorSexta) {
  let sextavalor = pushFridayArray();
  console.log(valorSexta);
  for (let index = 0; index < sexta.length; index += 1) {
    if (sexta[index].innerHTML !== "sextou") {
      sexta[index].innerHTML = "sextou";
    }else {
      sexta[index].innerHTML = sextavalor[index];
    }
  }
}
let buttomFriday = document.querySelector("#btn-friday");
buttomFriday.addEventListener("click", changeInnerText);


function zoomIn() {
  let day = document.querySelectorAll('.day');
  for (let index = 0; index < day.length; index += 1) {
    day[index].addEventListener('mouseover', function(ent) {
    ent.target.style.fontSize = '30px';
  })    
  } 
}
zoomIn(); // 6 ok

// function zoomIn() {
//   let day = document.querySelector('#days');
//   day.addEventListener('mouseover', function(ent) {
//     ent.target.style.fontSize = '30px';
//   })
// } sem for, mas não consegui implementar


function zoomOut(){
let day = document.querySelectorAll('.day');
  for (let index = 0; index < day.length; index += 1) {
    day[index].addEventListener('mouseout', function(ent) {
    ent.target.style.fontSize = '20px';
  })    
  } 
}
zoomOut(); // 6 ok