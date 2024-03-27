// 3 - Escriba una función que retorne true si una String es un palíndromo

function check(str){
    str = str.toLowerCase()
    let arr = []
    for (i of str){
        arr.push(i)
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != arr.reverse()[i]){
            break
        }else{
            return true
        }
    }
    return false
}

console.log(check('dabale arroz a la zorra el abad'))