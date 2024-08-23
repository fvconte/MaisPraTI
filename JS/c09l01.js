let arr1 = [1, 2, 3, 4, 5]
let arr2 = []

for (let k = arr1.length - 1; k <= 0; k--) {
    arr2.push(arr1[k])
}

console.log(arr1)
console.log(arr2)