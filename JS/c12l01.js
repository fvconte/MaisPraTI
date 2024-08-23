
let serie = {
    name: "Breaking Bad",
    genero: "Action",
    seasons: 4,
    status: "Em andamento",
    age: 18,
    episodes: {
        season1: 10,
        season2: 10,
        season3: 08,
        season4: 08
    },

    mostrarCaracteristicas: function() {
        return `o nome da série é: ${this.name} e a sua classificação é +${this.age}`
    }
}

console.log(serie.mostrarCaracteristicas())