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
      emptyList.className = "holidão";
      ulList.appendChild(emptyList);
    } else {
      emptyList.innerText = dezDaysList[index];
      emptyList.className = "day";
      ulList.appendChild(emptyList);
    }
  }
}
addDays();

function addHolidaysButton() {
  let holidays = document.querySelector(".buttons-container");
  let benjamimButton = document.createElement("button");
  benjamimButton.id = "btn-holiday";
  benjamimButton.innerText = "Feriados";
  holidays.appendChild(benjamimButton);
}
addHolidaysButton();

function changeBackgroundColor() {
  let feriado = document.querySelectorAll(".holiday");
  for (let index = 0; index < feriado.length; index += 1) {
    if (feriado[index].style.backgrondColor === "rgb(238,238,238)") {
      feriado[index].style.backgrondColor = "red";
    } else {
      feriado[index].style.backgrondColor = "rgb(238,238,238)";
    }
  }
}
let buttom = document.querySelector("#btn-holiday");
buttom.addEventListener("click", changeBackgroundColor());

function addFridayButton() {
  let friday = document.querySelector(".buttons-container");
  let benjamimButton = document.createElement("button");
  benjamimButton.id = "btn-friday";
  benjamimButton.innerText = "Sexta-Feira";
  friday.appendChild(benjamimButton);
}
addFridayButton();