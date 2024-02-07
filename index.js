////////////
// OBJECT //
////////////
const car = {
  brand : "BMW", 
  model : "M135i xDrive", 
  price : 800000000
}

////////////////////////
// CREATING AN OBJECT //
////////////////////////
// let user = {} // "Object literal" syntax 

// let user = new Object() // "Object constructor" syntax

/////////////////////////
// PROPETIES & METHODS //
/////////////////////////
// let user = {
//   name : "Muhammad Irham",
//   greet() {
//     console.log("Hello");
//   }
// }
/* 
Note : 
1. "name" adalah sebuah property
2. "greet() {}" adalah sebuah method
*/

///////////////////////////
// ADD & DELETE PROPERTY //
///////////////////////////
// Define an object 
const person = {
  name : "Ami Latifah",
  age : 25
}

// Add property hobby and its value "coding"
person.hobby = "coding"
// console.log(person); // { name: 'Ami Latifah', age: 25, hobby: 'coding' }
person.gender = "Perempuan"
// console.log(person);
person.perempuan = true
// console.log(person);


// Delete property age from object person 
delete person.age
// console.log(person);
delete person.gender
// console.log(person);

/////////////////////
// Accessing Value //
/////////////////////

// Accessing with dot (.)
let person1 = {
  name : "Andri Yunanda",
  age : 38
}
// console.log(person1.name);
// console.log(person1.age);

// Access with square brackets ([])
let person2 = {
  name : "Degina Rahmadhanti",
  age : 27
}
// console.log(person2["name"]);
// console.log(person2["age"]);

///////////////////////////
// Optional chaining "?" //
///////////////////////////
let user = {} // a user without "address" property

// console.log(user.address); // undefined
// console.log(user.address.street); // error!
// console.log(user.address?.street); // undefined but not error

///////////////////
// ACCESSING KEY //
///////////////////
let person3 = {
  name : "Taufiq Al-Haddad",
  age : 24
}
// console.log(Object.keys(person3)); // [ 'name', 'age' ]

////////////////////////
// THE "FOR..IN" LOOP //
////////////////////////
let person4 = {
  name : "Ananda Fajri Ramadhan",
  age : 25
}

for (let key in person4) {
  // Keys 
  // console.log(key); // name, age
  // Values for the keys 
  // console.log(person4[key]);
}

/////////////////////
// GETTER & SETTER //
/////////////////////
const user1 = {
  firstName : "Andi", 
  lastName : "Yuhilmi",

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(value) {
    const splittedValue = value.split(" ")
    this.firstName = splittedValue[0]
    this.lastName = splittedValue[1]
  },
}
// set fullName is executed with the given value 
user.fullName = "Rangga Yudistira"
// console.log([user1.firstName]);
// console.log(user1.lastName);

/////////////////////////////
// DESTRUCTURING ASSIGMENT //
/////////////////////////////
let a, b
[a, b] = [10, 20]
// console.log(a); // 10
// console.log(b); // 20

const person5 = {
  name : "Hidayat Nugaraha Zahdi", 
  age : 24
}
const {name, age} = person5

// console.log(name); // Hidayat Nugaraha Zahdi
// console.log(age); // 24

/////////////////////
// SPREAD OPERATOR //
/////////////////////
const dataOne = [1, 2, 3]
const dataTwo = [4, 5, 6]
const finalDataList = [...dataOne, ...dataTwo]
// console.log(finalDataList);

const objectOne = {
  nama : "Muhammad Irham"
}

const objectTwo = {
  email : "m.irham2748@gmail.com"
}
const finalObject = {...objectOne, ...objectTwo}
// console.log(finalObject);

//////////////////////////
// USING "THIS" KEYWORD //
//////////////////////////
const person6 = {
  firstName : "Miftahul",
  lastName : "Qalbi",
  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}
// person6.greet() // Hello Miftahul Qalbi

////////////////////////////
// OBJECT BUILT-IN METHOD //
////////////////////////////
const target = {a : 1, b : 2}
const source = {b : 4, c : 5}

const returnedTarget = Object.assign(target, source)

// console.log(target); // { a: 1, b: 4, c: 5 }

///////////
// CLASS //
///////////

// Create a class

// Class declaration 
class User1 {
  greeting() {
    console.log("Hello World");
  }
}

// Class expression 
const User2 = class {
  greeting() {
    console.log("Hello World");
  }
}

// Create an object from class

// Example 1 :
class User3 {
  greeting() {
    console.log("Hello World");
  }
}
const user2 = new User3()
// user2.greeting()

// Example 2 :
class User4 {
  ucapan() {
    console.log("Good Morning!");
  }
}

const user3 = new User4()
// user3.ucapan()

/////////////////
// CONSTRUCTOR //
/////////////////
class User5 {
  constructor(name) {
    this.Name  = name 
  }
  greeting() {
    console.log(`Hello ${this.Name} !`);
  }
}
const user4 = new User5("Muhammad Irham")
// user4.greeting()

/////////////////////
// ACCESS MODIFIER //
/////////////////////

// Public & private properties 
class User6 {
  // public property
  name 
  // private property
  #email

  constructor(name, email) {
    this.Name = name
    this.#email = email
  }
  getEmail() {
    return this.#email
  }
}
const user5 = new User6("Muhammad Irham", "m.irham2748@gmail.com")
console.log(user5.Name);
// console.log(user5.#email);

///////////////////////
// STATIC PROPERTIES //
///////////////////////
class DB {
  static #connection = ""

  static #initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100)
    DB.#connection = `New Databese Connection ${randomNum}`
  }

  static getConnection() {
    if (!DB.#connection) {
      DB.#initializeConnection()
    }
    return DB.#connection
  }
}

// first call
console.log();