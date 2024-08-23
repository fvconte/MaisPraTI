const prompt = require("prompt-sync")()

const num1 = Number(prompt('Disgite um número:'))

if (num1 > 0) {
    console.log("Numero positivo") 
} else if (num1 < 0) { 
    console.log("Numero negativo") 
}      else {
            console.log("Numero zero")  
    }