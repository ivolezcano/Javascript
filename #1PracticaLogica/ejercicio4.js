// 4 - Escriba una función que combine 2 listas alternando sus elementos.
// ej: [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function alternar(a, b){
    let resultado = []
    let i = 0
    while(i < a.lenght || i <  b.length) {
        resultado.push(a[i])
        resultado.push(b[i])
        i++
    }
    console.log(resultado)
}
alternar(['a', 'b', 'c'], [1, 2, 3])