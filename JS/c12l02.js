function computador(processador, gpu, ram, armazenamento) {
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

this.ligar = function () {
    console.log(`O ${this.processor} está funcionando!`)
}

this.mostrarEspecificacoes = function () {
    return `processador: ${this.processador}
            gpu: ${this.gpu}
            ram: ${this.ram}
            armazenamento: ${this.armazenamento}`
        }
}

let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
//   console.log(pc.mostrarEspecificacoes())


function jogos(tit, gen, anol, emp, jogar) {
   return 
        tit,
        gen,
        anol,
        emp,
        jogar
}

let jogo1 = jogos("C&C", "AFP", "1997", "zzz", () => console.log('Jogando'))

console.log(jogo1.jogar())

for(let key in jogo1) {
    console.log(`${key}: ${jogo1[key]}`)
}