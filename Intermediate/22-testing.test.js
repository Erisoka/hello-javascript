/*
Clases 80 a 81 - Testing
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=25938
*/

const sum = require('./21-testing')
const isEven = require('./23-testing-exercises')

test("Suma de 3 + 5 tiene que ser 8", () => {
    expect(sum(3, 5)).toBe(8)
})

test("Suma de 3 + 3 tiene que ser 6", () => {
    expect(sum(3, 3)).toBe(6)
})

// $ npm test

/* 
FAIL  ./22-testing.test.js
  √ Suma de 3 + 5 tiene que ser 8 (1 ms)
  × Suma de 3 + 3 tiene que ser 6 (2 ms)                                                                                                                                                                          
                                                                                                                                                                                                                  
  ● Suma de 3 + 3 tiene que ser 6                                                                                                                                                                                 
                                                                                                                                                                                                                  
    expect(received).toBe(expected) // Object.is equality

    Expected: 6
    Received: 7

      11 |
      12 | test("Suma de 3 + 3 tiene que ser 6", () => {
    > 13 |     expect(sum(3, 4)).toBe(6)
         |                       ^
      14 | })
      15 |
      16 | // $ npm test

      at Object.toBe (22-testing.test.js:13:23)

Test Suites: 1 failed, 1 total                                                                                                                                                                                    
Tests:       1 failed, 1 passed, 2 total                                                                                                                                                                          
Snapshots:   0 total
Time:        0.374 s
Ran all test suites.
*/

const isEven = require('./23-testing-exercises')

test("El número 16 es par", () => {
    expect(isEven(16)).toBe(true)
})

test("El número 17 es impar", () => {
    expect(isEven(17)).toBe(false)
})

// $ npm test