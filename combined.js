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

// → Comninar Métodos
// --------------------------

// quiero convertir el name y last name en una sola propiedad que se llame estudiante, y también quiero solo la edad, no quiero el curso.

// desestructuramos students
const result = students
  .map(({ name, lastname, age }) => ({
    student: `${name} ${lastname}`,
    age: age,
  }))
  .filter((student) => student.age > 20)
  .sort((a, b) => a.age - b.age)
  .reduce((accTotal, student) => accTotal + student.age, 0);
console.log(result);
