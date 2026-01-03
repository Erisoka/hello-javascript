// Objetos avanzados en javascript

// - Prototipos y Herencia

// Prototipos (mecanismo por el cual un objeto puede heredar propiedades y funciones de otros objetos)

let person = {
    name: "Juan",
    age: 13,
    greet: function() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`)
    }
}
console.log(person) // Output { name: 'Juan', age: 13, greet: [Function: greet] }
console.log(person.__proto__) // Output [Object: null prototype] {}
console.log(Object.getPrototypeOf(person)) // Output [Object: null prototype] {}
console.log(person.hasOwnProperty("name")) // Output true
console.log(person.hasOwnProperty("greet")) // Output true

person.sayAge = function() {
    console.log(`Tengo ${this.age} años.`)
}
person.sayAge() // Output Tengo 13 años.
console.log(person) // Output { name: 'Juan', age: 13, greet: [Function: greet], sayAge: [Function: sayAge] }

// Herencia 

let student = Object.create(person)
console.log(student) // Output {}
console.log(student.name) // Output Juan
student.name = "Leonidas"
console.log(student.name) // Output Leonidas  
student.age = 42
console.log(student.age) // Output 42 
student.greet() // Output Hola, mi nombre es Juan y tengo 13 años.
student.sayAge() // Output Tengo 13 años.
student.lenguaje = "JavaScript"
console.log(student.lenguaje) // Output JavaScript

// - Métodos estáticos y de instancia

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.greet = function(){
    console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`)
}

let new_person = new Person("Juan", 13)
console.log(new_person) // Output 
new_person.greet() // Output Hola, mi nombre es Juan y tengo 13 años.

// - Métodos avanzados

// assign

let person_core = { name: "Juan" }
let person_details = { age: 13 }
let full_person = Object.assign(person_core, person_details)
console.log(full_person) // Output { name: 'Juan', age: 13 }

// keys, values, entries

console.log(Object.keys(full_person)) // Output [ 'name', 'age' ]
console.log(Object.values(full_person)) // Output [ 'Juan', 13 ]
console.log(Object.entries(full_person)) // Output [ [ 'name', 'Juan' ], [ 'age', 13 ] ]