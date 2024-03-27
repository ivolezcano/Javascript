// 1 - Escriba una función que retorne el mayor elemento de un array de números
// No vale utilizar el método .sort()
function greatestElement(numbers) {
    let max = 0
    for (i of numbers){
        if (i > max){
            max = i 
        }
    }
    return max
}
let numeros = [10,9,5,20,15];
console.log("el elemento mas grande es: " + greatestElement(numeros));

