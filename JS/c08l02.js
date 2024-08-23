const prompt = require("prompt-sync")()
year = Number(prompt('Disgite um Ano:'))

if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
    console.log(`O ano ${year} é bissexto.`) 
} else {
    console.log(`O ano ${year} não é bissexto.`) 
}