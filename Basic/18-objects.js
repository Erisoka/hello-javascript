// Objects in JavaScript
const person = {
  name: "Leonidas",
  age: 44,
  city: "Ciénaga",
};

console.log(person); // Output: { name: 'Leonidas', age: 44, city: 'Ciénaga' }

console.log(person.name); // Output: Leonidas
console.log(person.age); // Output: 44
console.log(person.city); // Output: Ciénaga

console.log(person["name"]); // Output: Leonidas
console.log(person["age"]); // Output: 44
console.log(person["city"]); // Output: Ciénaga

console.log(Object.keys(person)); // Output: ['name', 'age', 'city']
console.log(Object.values(person)); // Output: ['Leonidas', 44, 'Ciénaga']

console.log(Object.entries(person));
// Output: [['name', 'Leonidas'], ['age', 44], ['city', 'Ciénaga']]

console.log(person.hasOwnProperty("age")); // Output: true
console.log(person.hasOwnProperty("email")); // Output: false

// Modifying object properties
person.age = 45;
console.log(person.age); // Output: 45

// Adding new properties
person.country = "Colombia";
console.log(person.country); // Output: Colombia

// Deleting properties
delete person.city;
console.log(person.city); // Output: undefined

// Nested objects and arrays
const student = {
  name: "Ana",
  grades: [90, 85, 88],
  address: {
    street: "123 Main St",
    city: "Ciénaga",
  },
};

console.log(student.grades[1]); // Output: 85
console.log(student.address.city); // Output: Ciénaga

// Looping through object properties
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Leonidas
// age: 45
// country: Colombia

// console.log(factorial(5)); // Output: 120

// Object methods

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Error: Division by zero"),
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(5, 3)); // Output: 15
console.log(calculator.divide(5, 0)); // Output: Error: Division by zero
console.log(calculator.divide(5, 2)); // Output: 2.5

// Object with method using 'this'
const rectangle = {
  width: 10,
  height: 5,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.area()); // Output: 50

// Creating objects using constructor functions
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Corolla
console.log(myCar.year); // Output: 2020

// Creating objects using classes
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}

const dog = new Animal("Buddy", "Dog");
console.log(dog.speak()); // Output: Buddy makes a noise.

// Inheritance with classes
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }
  speak() {
    return `${this.name} barks.`;
  }
}

const myDog = new Dog("Max", "Labrador");
console.log(myDog.speak()); // Output: Max barks.
console.log(myDog.species); // Output: Dog

// Summary: This code demonstrates the creation and manipulation of objects in JavaScript, including property access, modification, nested structures, looping through properties, object methods, constructor functions, classes, and inheritance.

let person1 = {
  firstName: "Carlos",
  lastName: "Santana",
  age: 30,
  city: "Bogotá",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },
  walk: function() {
    return this.firstName + " is walking.";
  },
  job: {
    title: "Engineer",
    company: "Tech Solutions",
    yearsExperience: 5,
    getJobInfo: function() {
      return this.title + " at " + this.company + " with " + this.yearsExperience + " years of experience.";
    },
    work: function() {
      return this.title + " is working.";
    }
  }
};
console.log(person1) // Output: entire person1 object
console.log(person1.getFullName()); // Output: Carlos Santana
console.log(person1.walk()); // Output: Carlos is walking.
console.log(person1.job.getJobInfo()); // Output: Engineer at Tech Solutions with 5 years of experience.
console.log(person1.job.work()); // Output: Engineer is working.

const book = {
  title: "JavaScript Basics",
  author: "John Doe",
  pages: 250,
  read: function() {
    return `Reading "${this.title}" by ${this.author}.`;
  }
};

console.log(book); // Output: entire book object
console.log(book.read()); // Output: Reading "JavaScript Basics" by John Doe. 
console.log(book.title); // Output: JavaScript Basics
console.log(book.author); // Output: John Doe
console.log(book.pages); // Output: 250

// iterate over book properties
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}