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

// → Para que sirve el 'sort' ?
// --------------------------
// El método sort() en JavaScript se utiliza para ordenar los elementos de un array. Este método modifica el array en el lugar y devuelve el array ordenado.

// Método SORT con IF y función normal
const sortedStudents = students.sort(function (firstStudent, secondStudent) {
  if (firstStudent.age > secondStudent.age) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedStudents);

// Reducción de la función al máximo sin IF con OP. TERNARIO
const sortedStudents2 = students.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(sortedStudents2);

// Reducción de la función al máximo sin IF y sin OP.TERNARIO
const sortedStudents3 = students.sort((a, b) => a.age - b.age);
console.log(sortedStudents3);

// Array de números

const numeros = [1000, 30, 50, 10, 100];

// si tuilizamos solo el método sort para ordenar número los ordenada alfavéticamente
console.log(numeros.sort());

// Debemos utilizar implementar el método sort correctamente para obtener el orden correcto
const sortedNum = numeros.sort((a, b) => a - b);
console.log(sortedNum);
