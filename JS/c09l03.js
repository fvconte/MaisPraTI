let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado = []

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
    throw new Error ("os arrays devem ter o mesmo tamanho.")
}

for (let i = 0; i < arr1.length; i++) {
    let somalinha = []
    for(let j = 0; j < arr1[i].length; j++) {
        somalinha.push(arr1[i][j] + arr2[i][j])
        }
    resultado.push(somalinha)
}

    console.table(arr1)
    console.table(arr2)
    console.table(resultado)