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

// → Para que sirve el método 'some' ?
// --------------------------
// El método some() en JavaScript se utiliza para determinar si al menos un elemento de un array cumple con una condición proporcionada por una función de prueba. Retorna true si al menos un elemento cumple la condición y false si ninguno lo hace.

// Hay algún estudiante mayor de 24 años?
const result = students.some(function (student) {
  if (student.age > 24) {
    return true;
  }
});
console.log(result);

// Recordemos que solo retorna un valor booleano de true or false

const result2 = students.some((student) => student.age > 24);
console.log(result2);
