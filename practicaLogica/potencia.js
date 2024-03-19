// Ingrese un número y mostrar su potencia n^2, repetir este proceso hasta que se ingrese un número negativo

let num = parseInt(prompt('Ingrese un número entero: '))

function potencia(){
    if (!isNaN(num)){
        while(num >= 0){
            potence = Math.pow(num, 2)
            console.log(`La potencia de ${num} es ${potence}`)
    
            num = parseInt(prompt('Ingrese otro número: '))
        }
        alert('Fin del programa.')
    }else{
        console('Aparentemente colo')
    }
}

potencia()