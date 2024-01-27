const inputLength = document.getElementById('inputLenght');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const generatedPassword = document.getElementById('generatedPassword');
const btnGenerate = document.getElementById('btnGenerate');

const generatedPass = (base, length) => {
    let password = '';
    for (let x = 0; x < length; x++){
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    };
    return password;
};


const generate = () =>{
    let length = parseInt(inputLength.value);

    let base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '.,*{}!"#$%&/()=?¡¿@<>'

    // let generatedPassword = document.getElementById('generatedPassword');

    if (checkbox1.checked) base+=numbers;
    if (checkbox2.checked) base+=symbols;

    generatedPassword.innerText = generatedPass(base, length);
};

window.addEventListener('DOMContentLoaded', () => {
    btnGenerate.addEventListener('click', ()=>{
        generate();
    });
});