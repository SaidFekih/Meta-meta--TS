"use strict";
// Static type checker
let user;
//type inference
let a = 5;
//Union types
let c;
c = 4;
c = "4";
//Literal types
let direction;
direction = "gauche";
//Type assertion
const btn = document.querySelector(".btn");
const div = document.querySelector(".div");
//Arrays
let myArray;
myArray = [1, 3, 5];
//Tupels
let complexArray;
complexArray = [1, "said", true];
let multiTypeArray;
multiTypeArray = [1, "Said"];
//Object
let myObject;
myObject = { name: "Said", age: 36, sex: true };
//any vs unknown
let myAny;
myAny = "anytype-said";
myAny.trim();
let myUnknown;
let programmeur = {
  name: "said",
  age: 36,
  work: "Developpeur",
};
programmeur.name = "said fekih";
//programmeur.work = "call center"; -> Cannot assign to 'work' because it is a read-only property.
console.log(
  programmeur.name + " " + programmeur.age + " ans, is a " + programmeur.work
);
let ines = {
  vip: true,
  name: "Ines",
  age: 17,
  work: "Muséologie ",
  employed: true,
};
console.log(ines.name + " is a Very important person ? " + ines.vip);
let said1;
let said2;
said1 = "teste d'humanité";
said2 = {
  name: "said",
  age: 36,
  work: "Developpeur",
};
console.log(said1);
console.log(said2);
let myBox = {
  a: 5,
};
//Functions
function add(a, b) {
  return a + b;
}
console.log(add(2, 5));
//Exemple d'une function qui utilise les generics
function displayMessage(x) {
  return x;
}
console.log(displayMessage("TypeScript well typed"));
//Classes
class UserAccount {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
const newUser = new UserAccount("Said", 1);
class UserAccount2 {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
const newUser2 = new UserAccount2("Ines", 2);
