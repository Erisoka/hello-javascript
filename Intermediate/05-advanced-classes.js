// Clases avanzadas

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`)
  }
}

const person = new Person("Juan", 13)
person.greet() // Output  Hola, mi nombre es Juan y tengo 13 años.
console.log(person) // Output Person { name: 'Juan', age: 13 }

person.sayAge = function() {
  console.log(`Tengo ${this.age} años.`)
}
person.sayAge() // Output Tengo 13 años.

// Clases Abstractas

class Animal {
  constructor(name) {
    if (this.constructor === Animal) {
      throw new Error("No se puede instanciar una clase abstracta.")
    }
    this.name = name
  }
  makeSound() {
    throw new Error("Este método debe ser implementado en una subclase.")
  }
}


class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
  makeSound() {
    console.log("El perro ladra.")
  }
}

const dog = new Dog("Fido", "Labrador")
dog.makeSound() // Output El perro ladra. 

// Error: No se puede instanciar una clase abstracta.
/* const otroAnimal = new Animal("Leo") 
console.log(otroAnimal) 
otroAnimal.makeSound()  */

// - Polimorfismo 

class Cat extends Animal {
  makeSound() {
    console.log("El gato maulla.")
  }
}
const gato = new Cat("Leo")
gato.makeSound() // Output El gato maulla.

// - Mixins 

const FlyMixin = {
  canFly: true,
  fly() {
    console.log(`El animal ${this.name} está volando.`)
  }
}

const SwimMixin = {
  canSwim: true,
  swim() {
    console.log(`El animal ${this.name} está nadando.`)
  }
}

const DracarisMixin = {
  canSwim: true,
  canFly: true,
  canDracaris: true,
  swim() {
    console.log(`El Dragon ${this.name} está nadando.`)
  },
  fly() {
    console.log(`El Dragon ${this.name} está volando.`)
  },
  dracaris() {
    console.log(`El Dragon ${this.name} está botando fuego!!!.`)
  }
}

class Bird extends Animal {
  constructor(name) {
    super(name)
    Object.assign(this, FlyMixin)
  }
  makeSound() {
    console.log(`El pájaro ${this.name} hace un sonido.`)
  }
}

const pajaro = new Bird("Piolin")
console.log(pajaro) // Output Bird { name: 'Piolin', canFly: true }
pajaro.fly() // Output El animal está volando.

class Fish extends Animal {
  constructor(name) {
    super(name)
    Object.assign(this, SwimMixin)
  }
  makeSound() {
    console.log("El pez hace un sonido.")
  }
}

const pez = new Fish("Nemo")
console.log(pez) // Output Fish { name: 'Nemo', canSwim: true }
pez.swim() // Output  

class Dragon extends Animal {
  constructor(name) {
    super(name)
    Object.assign(this, DracarisMixin)
  }
  makeSound() {
    console.log(`El dragon ${this.name} hace un rugido.`)
  }
}

const dragon = new Dragon("Smaug")
console.log(dragon) // Output Dragon { name: 'Smaug', canFly: true, canSwim: true, canDracaris: true }
console.log(dragon.name) // Output Smaug
dragon.makeSound() // Output El dragon Smaug hace un rugido.
dragon.fly() // Output El Dragon Smaug está volando.
dragon.swim() // Output El Dragon Smaug está nadando.
dragon.dracaris() // Output El Dragon Smaug está botando fuego!!!.

// - Patrón Singleton 

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
}

const singleton1 = new Singleton()
const singleton2 = new Singleton()

console.log(singleton1 === singleton2) // Output  true

class Session {
  constructor(name) {
    if (Session.instance) {
      return Session.instance
    } 
    this.name = name
    Session.instance = this
  }
  getName() {
    return this.name
  }
  clear(){
    Session.instance = null
    this.name = null
    console.log("Sesión finalizada.")
  }
}

const session1 = new Session("Leo")
console.log(session1) // Output Session { name: 'Leo' }
console.log(session1.getName()) // Output Leo
const session2 = new Session("Juan")
console.log(session2) // Output Session { name: 'Leo' }
console.log(session2.getName()) // Output  Leo

console.log(session1 === session2) // Output true

session1.clear() // Output Sesión finalizada.
console.log(session1.getName()) // Output null
console.log(session2.getName()) // Output null
console.log(session1 === session2) // Output true (son objeto session con los mismos datos)

const session3 = new Session("Leonidas")
console.log(session3) // Output Session { name: 'Leonidas' }
console.log(session3 === session1) // Output false

// - Patrón Factory

class Circle {
  constructor(radius) {
    this.radius = radius
  }
  getArea() {
    return Math.PI * this.radius * this.radius
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius
  }
  toString() {
    return `Circle with radius ${this.radius}`
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
  getPerimeter() {
    return 2 * (this.width + this.height)
  }
  toString() {
    return `Rectangle with width ${this.width} and height ${this.height}`
  }
}

class ShapeFactory {
  constructor(){
    this.shapes = []
  }
  addShape(shape) {
    this.shapes.push(shape)
  }
  getShape(index) {
    return this.shapes[index]
  }
  getShapes() {
    return this.shapes
  }
}

const shapeFactory = new ShapeFactory()
shapeFactory.addShape(new Circle(5))
shapeFactory.addShape(new Rectangle(10, 20))
shapeFactory.addShape(new Circle(3))

console.log(shapeFactory.getShapes()) /* Output [
  Circle { radius: 5 },
  Rectangle { width: 10, height: 20 },
  Circle { radius: 3 }
] */

console.log(shapeFactory.getShape(1)) // Output Rectangle { width: 10, height: 20 }
console.log(shapeFactory.getShape(1).getArea()) // Output 200
console.log(shapeFactory.getShape(1).getPerimeter()) // Output 60
console.log(shapeFactory.getShape(1).toString()) // Output Rectangle with width 10 and height 20

// - Symbol

const ID = Symbol("id")
const NAME = Symbol("name")
const AGE = Symbol("age")

class Persona {
  constructor(name, age) {
    this[NAME] = name
    this[AGE] = age
    this[ID] = Math.random()
  }
  getName() {
    return this[NAME]
  }
  getAge() {
    return this[AGE]
  }
  getId() {
    return this[ID]
  }
  setID(id) {
    this[ID] = id
  }
  setName(name) {
    this[NAME] = name
  }
  setAge(age) {
    this[AGE] = age
  }
}

const persona = new Persona("Juan", 30)
console.log(persona.getId()) // Output 
console.log(persona.getName()) // Output Juan
console.log(persona.getAge()) // Output 30
persona.setID(12345)
console.log(persona.getId()) // Output 12345
persona.setName("Pedro")
console.log(persona.getName()) // Output Pedro
persona.setAge(40)
console.log(persona.getAge()) // Output 40

// - instanceof 

class Animal1 { }

class Dog1 extends Animal1 { }
class Cat1 extends Animal1 { }

const animal1 = new Animal1()
const dog1 = new Dog1()
const cat1 = new Cat1()

console.log(animal1 instanceof Animal1) // Output true
console.log(dog1 instanceof Animal1) // Output true
console.log(cat1 instanceof Animal1) // Output true
console.log(animal1 instanceof Dog1) // Output false
console.log(dog1 instanceof Dog1) // Output true
console.log(cat1 instanceof Cat1) // Output true
console.log(cat1 instanceof Dog1) // Output false

// create

const animal2 = Object.create(Animal1.prototype)
const dog2 = Object.create(Dog1.prototype)
const cat2 = Object.create(Cat1.prototype)

console.log(animal2 instanceof Animal1) // Output true
console.log(dog2 instanceof Animal1) // Output true
console.log(cat2 instanceof Animal1) // Output true

// - Proxy 

const personProxy = new Proxy({}, {
  get: (target, prop) => {
    if (prop in target) {
      return target[prop]
    }
  },
  set: (target, prop, value) => {
    target[prop] = value
  }
})

personProxy.name = "Juan"
personProxy.age = 14
console.log(personProxy.name) // Output Juan
console.log(personProxy.age) // Output 14
console.log(personProxy.address) // Output undefined
personProxy.address = "Calle Falsa 123"
console.log(personProxy.address) // Output Calle Falsa 123
personProxy.name = "Pedro"
console.log(personProxy.name) // Output Pedro
console.log(personProxy.age) // Output 14

const proxy = {
  get(target, prop, receiver){
    console.log("Target: ", target)
    console.log("Prop: ", prop)
    console.log("Receiver: ", receiver)
    return Reflect.get(target, prop, receiver)
  }, 
  set(target, prop, value, receiver){
    console.log("Target: ", target)
    console.log("Prop: ", prop)
    console.log("Value: ", value)
    console.log("Receiver: ", receiver)
    if (prop === "balance") {
      if (value < 0) {
        throw new Error("El saldo no puede ser negativo.")
      }
      target[prop] = value
      return true
    }
    if (prop === "accountNumber") {
      if (value.length !== 9) {
        throw new Error("El número de cuenta debe tener 9 dígitos.")
      }
    }
    if (prop === "name") {
      if (value.length < 3) {
        throw new Error("El nombre debe tener al menos 3 caracteres.")
      }
    }
    if (prop === "age") {
      if (value < 18) {
        throw new Error("El usuario debe ser mayor de edad.")
      }
    }
    if (prop === "address") {
      if (value.length < 10) {
        throw new Error("La dirección debe tener al menos 10 caracteres.")
      }
    }
    if (prop === "phone") {
      if (value.length !== 9) {
        throw new Error("El teléfono debe tener 9 dígitos.")
      }
    }
    if (prop === "email") {
      if (!value.includes("@")) {
        throw new Error("El email debe contener un @.")
      }
    }
    return Reflect.set(target, prop, value, receiver)
  }, 
  apply(){
    console.log("apply")
  }, 
  construct(){
    console.log("construct")
  }, 
  defineProperty(){
    console.log("defineProperty")
  }, 
  deleteProperty(){
    console.log("deleteProperty")
  }, 
  enumerate(){
    console.log("enumerate")
  }, 
  getOwnPropertyDescriptor(){
    console.log("getOwnPropertyDescriptor")
  }, 
  getPrototypeOf(){
    console.log("getPrototypeOf")
  }, 
  isExtensible(){
    console.log("isExtensible")
  }, 
  ownKeys(){
    console.log("ownKeys")
  }, 
  preventExtensions(){
    console.log("preventExtensions")
  }, 
  setPrototypeOf(){
    console.log("setPrototypeOf")
  }
}

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber
    this.balance = balance
    }
  /* deposit(amount) {
    this.balance += amount
  }
  withdraw(amount) {
    this.balance -= amount
  }
  getBalance() {
    return this.balance
  }
  getAccountNumber() {
    return this.accountNumber
  }
  setAccountNumber(accountNumber) {
    this.accountNumber = accountNumber 
  } */
}

const bankAccount = new Proxy( new BankAccount("123456789", 1000), proxy)

console.log(bankAccount.balance) // Output 1000
// bankAccount.balance = -500 // Output Error: El saldo no puede ser negativo.
bankAccount.balance = 2000
console.log(bankAccount.balance) // Output 2000
