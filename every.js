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

// → Para que sirve el método 'every' ?
// --------------------------
// El método every() en JavaScript se utiliza para verificar si todos los elementos de un array cumplen con una condición proporcionada por una función de prueba. Retorna true si todos los elementos cumplen la condición y false si al menos uno de ellos no lo hace.

// ES LO CONTRARIO DEL MÉTODO SOME

// 3 parámetros
students.every(function (element, index, array) {
  // Condición de prueba
});

// element: El elemento actual que está siendo procesado en el array.
// index: La posición del elemento en el array.
// array: El array en el que se está iterando.
// La función de prueba se ejecuta una vez por cada elemento del array hasta que se encuentra un elemento que no cumple con la condición. Si todos los elementos cumplen la condición, la función every() retorna true; de lo contrario, retorna false.

// todos los estudiantes tienen 20 años?
const result = students.every((student) => student.age === 20);
console.log(result);

// todos los estudiantes tienen una 'J' en su nombre?
const result2 = students.every((student) => student.name.includes('J'));
console.log(result2);
