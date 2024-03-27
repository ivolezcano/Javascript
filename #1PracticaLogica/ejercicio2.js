// 2 - Escriba una función que calcule la suma de todos los elementos numéricos de un array
function suma(numbers) {
    let total = 0
    for(i of numbers){
        total = total + i
    }
    return total
}

let numeros = [1, 2, 3, 4, 5, 6]
console.log("la suma es: " + suma(numeros));