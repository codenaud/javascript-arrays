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

/* // FOR => Forma imperativa para realizar recorrer un array.
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
} */

// → Para que sirve el 'forEach' ?
// --------------------------
// 'forEach' es un método en JavaScript que se utiliza para iterar sobre elementos de un array. Te permite ejecutar una función proporcionada una vez para cada elemento del array, en orden. Es una forma más sencilla y concisa de recorrer un array en comparación con un bucle for.

// FOR EACH (valor) => Forma declarativa.
students.forEach((student) => {
  console.log(student);
});

// FOR EACH con (valor, índice)
students.forEach((student, index) => {
  console.log(student);
  console.log(index);
});

// FOR EACH con (valor, índice, array)
students.forEach((student, index, students) => {
  console.log(student);
  console.log(index);
  console.log(students);
});

// FOR EACH Accediendo a los valores independientes.
// Acceder SOLO a los cursos de los estudiantes.
students.forEach((student) => {
  console.log(student.course);
});

// Acceder SOLO a los nombres de los estudiantes.
students.forEach((student) => {
  console.log(student.name);
});

// para poder extraer el nombre completo por ejemplo
students.forEach((student) => {
  console.log(student.name + ' ' + student.lastname);
});

// FOR EACH no devuelve nada, por lo que debemos almacenar el resultado nosotros
const fullnames = [];

students.forEach((student) => {
  fullnames.push(student.name + ' ' + student.lastname);
});

console.log(fullnames);
