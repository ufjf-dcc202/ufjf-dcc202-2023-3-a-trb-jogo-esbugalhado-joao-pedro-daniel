import { randomNumber } from "./dado.js";

const btnDado = document.querySelector('#botao-dado');
const resultadoSorteio = document.querySelector('#num-sorteado');

btnDado.addEventListener('click', () => {
    const numSorteado = randomNumber();
    resultadoSorteio.textContent = numSorteado;
});