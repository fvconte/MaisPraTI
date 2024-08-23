const prompt = require("prompt-sync")()

let sum = 0
let num = 9999
let counter = 0
4
do {
    num = Number(prompt("Informe a parcela:"))
    sum = sum + num
    counter ++
    console.log("> Total Parcial = " + sum)
} while(num !== 0)

console.log(">> Média Final = " + sum/counter)