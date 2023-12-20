import { randomNumber, randomNumber2 } from "./dado.js";
import { conferencia } from "./conferencia.js";

// vencedor ou sair
let vencedor = false;
let sair = false;

function verificaPlayer1() {
    if (
        (p1Position1.textContent.trim() !== '') &&
        (p1Position2.textContent.trim() !== '') &&
        (p1Position3.textContent.trim() !== '') &&
        (p1Position4.textContent.trim() !== '') &&
        (p1Position5.textContent.trim() !== '') &&
        (p1Position6.textContent.trim() !== '') &&
        (p1Position7.textContent.trim() !== '') &&
        (p1Position8.textContent.trim() !== '') &&
        (p1Position9.textContent.trim() !== '')
    ) {
        vencedor = true;
    }   
}

function verificaPlayer2() {
    if (
        (p2Position1.textContent.trim() !== '') &&
        (p2Position2.textContent.trim() !== '') &&
        (p2Position3.textContent.trim() !== '') &&
        (p2Position4.textContent.trim() !== '') &&
        (p2Position5.textContent.trim() !== '') &&
        (p2Position6.textContent.trim() !== '') &&
        (p2Position7.textContent.trim() !== '') &&
        (p2Position8.textContent.trim() !== '') &&
        (p2Position9.textContent.trim() !== '')
    ) {
        vencedor = true;
    }
    
}


// posições tabuleiro player 1
const p1Position1 = document.querySelector('#p1-1');
const p1Position2 = document.querySelector('#p1-2');
const p1Position3 = document.querySelector('#p1-3');
const p1Position4 = document.querySelector('#p1-4');
const p1Position5 = document.querySelector('#p1-5');
const p1Position6 = document.querySelector('#p1-6');
const p1Position7 = document.querySelector('#p1-7');
const p1Position8 = document.querySelector('#p1-8');
const p1Position9 = document.querySelector('#p1-9');

// posições tabuleiro player 2
const p2Position1 = document.querySelector('#p2-1');
const p2Position2 = document.querySelector('#p2-2');
const p2Position3 = document.querySelector('#p2-3');
const p2Position4 = document.querySelector('#p2-4');
const p2Position5 = document.querySelector('#p2-5');
const p2Position6 = document.querySelector('#p2-6');
const p2Position7 = document.querySelector('#p2-7');
const p2Position8 = document.querySelector('#p2-8');
const p2Position9 = document.querySelector('#p2-9');


// player atual
let currentplayer = 1;
const playerElement = document.querySelector('#jogador-atual');
function atualizaCurrentPlayer() {
    playerElement.textContent = `Jogador atual: ${currentplayer}`;
}

// atualiza o player atual (no caso o 1)
atualizaCurrentPlayer();

// sorteio dado
const btnDado = document.querySelector('#botao-dado');
const resultadoSorteio = document.querySelector('#num-sorteado');
let numSorteado = '';

// colunas
const btnCol1 = document.querySelector('#p1-col1');
const btnCol2 = document.querySelector('#p1-col2');
const btnCol3 = document.querySelector('#p1-col3');

// rodada
function rodadaPlayer1() {

    btnDado.addEventListener('click', () => {
        const numSorteado = randomNumber();
        resultadoSorteio.textContent = numSorteado;

        btnCol1.addEventListener('click', () => {
            if (currentplayer === 1){
                if (p1Position1.textContent.trim() === '') {
                    p1Position1.textContent = numSorteado;
                } else if (p1Position2.textContent.trim() === '') {
                    p1Position2.textContent = numSorteado;
                } else if (p1Position3.textContent.trim() === '') {
                    p1Position3.textContent = numSorteado;
                }
        
                currentplayer = 2;
                atualizaCurrentPlayer();
            }
        });
    
        btnCol2.addEventListener('click', () => {
            if (currentplayer === 1) {
                if (p1Position4.textContent.trim() === '') {
                    p1Position4.textContent = numSorteado;
                } else if (p1Position5.textContent.trim() === '') {
                    p1Position5.textContent = numSorteado;
                } else if (p1Position6.textContent.trim() === '') {
                    p1Position6.textContent = numSorteado;
                }
    
                currentplayer = 2;
                atualizaCurrentPlayer();
            }
        });
    
        btnCol3.addEventListener('click', () => {
            if (currentplayer === 1) {
                if (p1Position7.textContent.trim() === '') {
                    p1Position7.textContent = numSorteado;
                } else if (p1Position8.textContent.trim() === '') {
                    p1Position8.textContent = numSorteado;
                } else if (p1Position9.textContent.trim() === '') {
                    p1Position9.textContent = numSorteado;
                }
    
                currentplayer = 2;
                atualizaCurrentPlayer();
            }
        });
    });
};

function rodadaPlayer2() {

    const num1Sorteado = randomNumber();
    const num2Sorteado = randomNumber2();

    if(num2Sorteado === 1) {
        if (currentplayer === 2){
            if (p2Position1.textContent.trim() === '') {
                p2Position1.textContent = num1Sorteado;
            } else if (p2Position2.textContent.trim() === '') {
                p2Position2.textContent = num1Sorteado;
            } else if (p2Position3.textContent.trim() === '') {
                p2Position3.textContent = num1Sorteado;
            }
    
            currentplayer = 1;
            atualizaCurrentPlayer();
        }
    }

    if(num2Sorteado === 2) {
        if (currentplayer === 2) {
            if (p2Position4.textContent.trim() === '') {
                p2Position4.textContent = num1Sorteado;
            } else if (p2Position5.textContent.trim() === '') {
                p2Position5.textContent = num1Sorteado;
            } else if (p2Position6.textContent.trim() === '') {
                p2Position6.textContent = num1Sorteado;
            }

            currentplayer = 1;
            atualizaCurrentPlayer();
        }
    }

    if(num2Sorteado === 3) {
        if (currentplayer === 2) {
            if (p2Position7.textContent.trim() === '') {
                p2Position7.textContent = num1Sorteado;
            } else if (p2Position8.textContent.trim() === '') {
                p2Position8.textContent = num1Sorteado;
            } else if (p2Position9.textContent.trim() === '') {
                p2Position9.textContent = num1Sorteado;
            }

            currentplayer = 1;
            atualizaCurrentPlayer();
        }
    }

}


// lógica do jogo

while(vencedor === false) {
    rodadaPlayer1();
    verificaPlayer1();

    if(vencedor === true) {
        break;
    }

    rodadaPlayer2;
    verificaPlayer2;
}