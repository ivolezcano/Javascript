// Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.


function likes(n) {
    if (n < 1000) {
        return n.toString() + ' Likes'; 
    } else if (n < 1000000) { 
        return (n / 1000) + 'K Likes'; 
    } else { 
        return (n / 1000000).toFixed(1) + 'M Likes'; 
    }
}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1.9K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120.8K"
console.log(likes(25222444)) // "25.2M"