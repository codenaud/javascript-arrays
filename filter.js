// Author: @FaztCode
// Link: https://www.youtube.com/@FaztCode
// Topic: Javascript Arrays - Metodos (map, filter, reduce, sort, etc.)
// Youtube: https://youtu.be/qqR1enOceVg?si=rTp7ySFiDi-7BpIc

// → Coded by @codenaud[https://github.com/codenaud]
// VsCode extensions used: Quokka

// sample array of students
// import { students } from 'data/sample_data.js';

// Quoka necesita el array para poder funcionar. Si no utilizas Quokka puedes comentarlo
const students = [
  {
    name: 'Jill',
    lastname: 'Doe',
    age: 24,
    course: 'Marketing',
  },
  {
    name: 'John',
    lastname: 'Doe',
    age: 22,
    course: 'Web Development',
  },
  {
    name: 'Jack',
    lastname: 'Doe',
    age: 20,
    course: 'Accounting',
  },
  {
    name: 'Ryan Jhon',
    lastname: 'Ray',
    age: 23,
    course: 'Web Development',
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    age: 20,
    course: 'Financial Management',
  },
];

// → Para que sirve el método 'filter' ?
// --------------------------
// El método filter en JavaScript se utiliza para crear un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada. En otras palabras, filtra los elementos de un array según una condición especificada y devuelve un nuevo array con los elementos que cumplen esa condición.

// ejemplo clásico

const developers = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].course === 'Web Development') {
    developers.push(students[i]);
  }
}
console.log(developers);

students.filter(function (student) {
  console.log(student);
});

const result = students.filter(function (student) {
  if (student.course === 'Web Development') {
    return true;
  }
});
console.log(result);

// reducir la función al máximo
const result2 = students.filter((student) => student.course === 'Web Development');

console.log(result2);
