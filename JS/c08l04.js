const prompt = require("prompt-sync")()

let prime = Number(prompt('Informe o Número:'))

for(let i = 1; i < prime; i++) {
    if((prime % i === 0 )) {
        prime = 0
        break
    }
}