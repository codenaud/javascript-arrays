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

// → Para que sirve el 'reduce' ?
// --------------------------
// El método reduce en JavaScript se utiliza para reducir los elementos de un array a un solo valor. Permite aplicar una función acumuladora a cada elemento del array, de izquierda a derecha, con el objetivo de reducirlos a un único resultado. La función acumuladora toma dos argumentos: el acumulador y el valor actual, y devuelve el nuevo valor del acumulador.

// Utilización de for clásico

let total = 0;
for (let i = 0; i < students.length; i++) {
  total += students[i].age;
}
console.log(total);

// REDUCE: Necesita un acomulador + el valor de total, se asigna al final.
const result = students.reduce(function (accTotal, student) {
  return accTotal + student.age;
}, 0);
console.log(result);

// Funcion ES6

const result2 = students.reduce((accTotal, student) => accTotal + student.age, 0);
console.log(result2);

// Nuevo Array developes.

const developers = [
  {
    id: 1,
    name: 'John',
    skills: ['HTML', 'React', 'Javascript', 'Java'],
  },
  {
    id: 2,
    name: 'Jane',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'NodeJS'],
  },
  {
    id: 3,
    name: 'Jack',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'NodeJS'],
  },
];

// con developer.skills => añade 3 arrays
const devSkills = developers.reduce(function (allSkills, developer) {
  return [...allSkills, developer.skills];
}, []);
console.log(devSkills);

// con ...developer.skills => añade 1 array con todos los datos
const devSkills2 = developers.reduce(function (allSkills, developer) {
  return [...allSkills, ...developer.skills];
}, []);
console.log(devSkills2);

// con new set => añade añade 1 OBJETO con todos los datos sin duplicados
const devSkills3 = developers.reduce(function (allSkills, developer) {
  return new Set([...allSkills, ...developer.skills]);
}, []);
console.log(devSkills3);

// con array.from => Crea 1 array del objeto new set con todos los datos sin duplicados
const devSkills4 = developers.reduce(function (allSkills, developer) {
  return Array.from(new Set([...allSkills, ...developer.skills]));
}, []);
console.log(devSkills4);

// lo convertimos a lowercase y eliminamos el posible error de duplicados por mayúsculas
const devSkills5 = developers.reduce(function (allSkills, developer) {
  const lowercaseSkills = developer.skills.map((skill) => skill.toLowerCase());
  return Array.from(new Set([...allSkills, ...lowercaseSkills]));
}, []);

console.log(devSkills5);
