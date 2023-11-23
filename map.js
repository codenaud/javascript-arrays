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

// → Para que sirve el 'map' ?
// --------------------------
// El método map en JavaScript se utiliza para crear un nuevo array con los resultados de llamar a una función proporcionada para cada elemento en el array original. Es decir, crea un nuevo array aplicando una transformación a cada elemento del array original y devuelve el nuevo array resultante

students.map((student) => {
  console.log(student);
});

const result = students.map((student) => {
  return student;
});

console.log(result);

const fullNames = students.map((student) => {
  return student.name + ' ' + student.lastname;
});

console.log(fullNames);

// Reducir el código al máximo
const names = students.map((student) => student.name);
console.log(names);

// También se pueden realizar operaciones complejas.
// Vamos ahora a cambiar las propiedades.

const names2 = students.map((student) => {
  return {
    fullnames: student.name + ' ' + student.lastname,
    age: student.age,
    course: student.course,
  };
});

console.log(names2);

// map con spread operator
const names3 = students.map((student) => {
  return {
    ...student,
    title: `${student.name} - ${student.course}`,
  };
});

console.log(names3);

// cambiar un dato de todo el array con 'map'
const programmingCourse = students.map((student) => {
  return {
    ...student,
    course: 'Programming',
  };
});

console.log(programmingCourse);

// el array ORIGINAL 'map' no se ha alterado en ningún momento
console.log(students);

// concatenar el método 'map'
const doubleage = students
  .map((student) => ({
    ...student,
    course: 'Programming',
  }))
  .map((student) => ({ ...student, age: student.age * 2 }));

console.log(doubleage);
