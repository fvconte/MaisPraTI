const prompt = require("prompt-sync")()

let multiplier = Number(prompt("Informe o número para tabuada: "))

for (let counter = 0; counter <= 10; counter ++) {
    console.log(`${multiplier} * ${counter} = `, multiplier * counter)
}