const generate = () =>{
    let lenght = parseInt(inputLength.value);

    let base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '.,*{}!"#$%&/()=?¡¿@<>'

    let generatedPassword = document.getElementById('generatedPassword');

    // if (checkbox1.checked) base+=numbers;
    // if (checkbox2.checked) base+=symbols ;

    generatedPassword.innerText = 'AAA';
};

window.addEventListener('DOMContentLoaded', () => {
    let btnGenerate = document.getElementById('btnGenerate');

    btnGenerate.addEventListener('click', ()=>{
        generate();
    });
});