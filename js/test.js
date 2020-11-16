// objA = { a: 1, b: 2 };

// const objB = Object.create(objA);
// objB.c = 3;
// objB.d = 4;

// console.log(objB);

// const arr = [];

// for (const key in objB) {

//   if (objB.hasOwnProperty(key)) {

//     arr.push(key);
//   }
// }

// console.log(arr);

// const keys = Object.keys(objB);
// console.log(keys);

// ______________________________________________________________________________

// function a() {
//   console.log('Hello!');
// }

// console.dir(a);

// ______________________________________________________________________________

// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// User.prototype.greet = function () {
//   console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old`);
// };

// User.prototype.walk = function () {
//   console.log(`User ${this.name} is walking`);
// };

// User.prototype.talk = function () {
//   console.log(`User ${this.name} is talking`);
// };

// const bobby = new User('Bobby', 15);

// console.log(bobby);

// bobby.greet();

// bobby.walk();

// bobby.talk();

// const poly = new User('Poly', 22);

// console.log(poly);

// poly.greet();

// ______________________________________________________________________________

const objA = {
  x: 1,
  y: 2,

  funcA(a, b) {
    console.log('Hi from objA!');
    return a + b;
  },
};

console.log(objA);

console.log(objA.funcA(1, 2));

const objB = Object.create(objA);

objB.z = 3;

console.log(objB);

console.log(objB.funcA(3, 4));

const objC = {
  w: 4,
};

console.log(objC);

console.log(objC.funcA());
