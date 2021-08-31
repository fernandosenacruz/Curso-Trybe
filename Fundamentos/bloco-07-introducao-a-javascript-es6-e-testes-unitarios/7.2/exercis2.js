const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1
const addMorningClass = (lesson) => {
    lesson.turno = 'manhã';
    return lesson;
}


addMorningClass(lesson2);

//2
const objectKeys = obj => Object.keys(obj);

//3
const objectLength = obj => Object.keys(obj).length;

//4
const objectValues = obj => Object.values(obj);

//5
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

//6
const overAllStudentNumber = () => lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;

console.log(overAllStudentNumber());

//7
const getValueByNumber = (lesson, key) => Object.values(lesson)[key];

console.log(getValueByNumber(lesson1, 0));

// 8
const verifyPair = (lesson, key, value) => lesson[key] === (value);

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson1, 'materia', 'Maria Clara'));
