// Static type checker
let user: string;

//type inference
let a = 5;

//Union types
let c: number | string;
c = 4;
c = "4";

//Literal types
let direction: "gauche" | "droite";
direction = "gauche";

//Type assertion
const btn = document.querySelector(".btn") as HTMLButtonElement;
const div = <HTMLDivElement>document.querySelector(".div");

//Arrays
let myArray: number[];
myArray = [1, 3, 5];

//Tupels
let complexArray: [number, string, boolean];
complexArray = [1, "said", true];

let multiTypeArray: (number | string)[];
multiTypeArray = [1, "Said"];

//Object
let myObject: { name: string; age: number; sex: any };
myObject = { name: "Said", age: 36, sex: true };

//any vs unknown
let myAny: any;
myAny = "anytype-said";
myAny.trim();

let myUnknown: unknown;
//myUnknown.trim(); -> error

//Interface declaration
interface User {
  name: string;
  age: number;
  readonly work: string;
  employed?: boolean; // optional property
}
let programmeur: User = {
  name: "said",
  age: 36,
  work: "Developpeur",
};
programmeur.name = "said fekih";
//programmeur.work = "call center"; -> Cannot assign to 'work' because it is a read-only property.
console.log(
  programmeur.name + " " + programmeur.age + " ans, is a " + programmeur.work
);

interface UserVip extends User {
  vip: boolean;
}

let ines: UserVip = {
  vip: true,
  name: "Ines",
  age: 17,
  work: "Muséologie ",
  employed: true,
};
console.log(ines.name + " is a Very important person ? " + ines.vip);

// Type Aliases
type myBoolean = true | false;
type stringOrNumber = string | number;
type human = User | string;

let said1: human;
let said2: human;
said1 = "teste d'humanité";

said2 = {
  name: "said",
  age: 36,
  work: "Developpeur",
};
console.log(said1);
console.log(said2);

//Generics
interface Box<Type> {
  a: Type;
}
let myBox: Box<number> = {
  a: 5,
};

//Functions
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 5));

//Exemple d'une function qui utilise les generics
function displayMessage<T>(x: T): T {
  return x;
}
console.log(displayMessage("TypeScript well typed"));

//Classes
class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const newUser = new UserAccount("Said", 1);

class UserAccount2 {
  constructor(private name: string, private id: number) {}
}
const newUser2 = new UserAccount2("Ines", 2);
