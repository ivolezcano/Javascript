//Crear soluciones
//Problema
//Hay una fiesta, realizar un programa que solo deje pasar a los mayores de Edad.
//La primer persona que entre después de las 2 Am no paga, los demás si.

let free = false;

const validarCliente = (time) =>{
    let edad = prompt('¿cual es tu edad? ');
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert('Podes pasar gratis');
            free = true;
        } else {
            alert(`Podés pasar pero tenés que pagar la entrada, son las ${time}hs`)
        }
    } else {
        alert('Sos menor de edad por ende no podes ingresar a la fiesta :(')
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);