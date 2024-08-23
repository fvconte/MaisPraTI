const prompt = require("prompt-sync")()

let num1 = Number(prompt('Informe o primeiro Número:'))
let num2 = Number(prompt('Informe o segundo Número:'))

let n1 = num1
let n2 = num2

do {
    let temp = n2
    n2 = n1 % n2
    n1 = temp
} while (n2 !== 0)11

const MDC = n1

console.log(`O MDC de ${num1} e ${num2} é ${MDC}.`)