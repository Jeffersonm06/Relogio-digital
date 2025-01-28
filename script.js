const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundos');
const fundo = document.getElementById('fundo');

const tictac = setInterval(() => {
    const data = new Date();

    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    if (hr > 5 && hr < 12) {
        fundo.style = 'background-image: url(./img/manha.jpeg)'
        
    } else if (hr < 18) {
        fundo.style = 'background-image: url(./img/tarde.jpeg)'
    } else {
        fundo.style = 'background-image: url(./img/noite.gif)'
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})