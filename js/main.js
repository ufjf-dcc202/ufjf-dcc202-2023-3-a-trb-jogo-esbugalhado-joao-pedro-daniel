import { randomNumber, randomNumber2 } from "./dado.js";


// vencedor ou sair
let vencedor = false;
let sair = false;

function verificaPlayer1() {
    if (
        (p1Position1.innerHTML.trim() !== '') &&
        (p1Position2.innerHTML.trim() !== '') &&
        (p1Position3.innerHTML.trim() !== '') &&
        (p1Position4.innerHTML.trim() !== '') &&
        (p1Position5.innerHTML.trim() !== '') &&
        (p1Position6.innerHTML.trim() !== '') &&
        (p1Position7.innerHTML.trim() !== '') &&
        (p1Position8.innerHTML.trim() !== '') &&
        (p1Position9.innerHTML.trim() !== '')
    ) {
        vencedor = true;
    }
    
    console.log('foi a verificação 1');
}

function verificaPlayer2() {
    if (
        (p2Position1.innerHTML.trim() !== '') &&
        (p2Position2.innerHTML.trim() !== '') &&
        (p2Position3.innerHTML.trim() !== '') &&
        (p2Position4.innerHTML.trim() !== '') &&
        (p2Position5.innerHTML.trim() !== '') &&
        (p2Position6.innerHTML.trim() !== '') &&
        (p2Position7.innerHTML.trim() !== '') &&
        (p2Position8.innerHTML.trim() !== '') &&
        (p2Position9.innerHTML.trim() !== '')
    ) {
        vencedor = true;
    }
    
    console.log('foi a verificação 2');
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

// confere se dados iguais em tabuleiros opostos
function conferencia(){
    if (
        (p1Position1 === p2Position1) || (p1Position1 === p2Position2) || (p1Position1 === p2Position3) ||
        (p1Position2 === p2Position1) || (p1Position2 === p2Position2) || (p1Position2 === p2Position3) ||
        (p1Position3 === p2Position1) || (p1Position3 === p2Position2) || (p1Position3 === p2Position3))
        {
            if (currentplayer === 1) {
            p2Position1.innerHTML = 0;
            p2Position2.innerHTML = 0;
            p2Position3.innerHTML = 0;
            } else {
            p1Position1.innerHTML = 0;
            p1Position2.innerHTML = 0;
            p1Position3.innerHTML = 0;
            }
    } else if (
        (p1Position4 === p2Position4) || (p1Position4 === p2Position5) || (p1Position4 === p2Position6) ||
        (p1Position5 === p2Position4) || (p1Position5 === p2Position5) || (p1Position5 === p2Position6) ||
        (p1Position6 === p2Position4) || (p1Position6 === p2Position5) || (p1Position6 === p2Position6)) 
        {
            if (currentplayer === 1) {
            p2Position4.innerHTML = 0;
            p2Position5.innerHTML = 0;
            p2Position6.innerHTML = 0;
            } else {
            p1Position4.innerHTML = 0;
            p1Position5.innerHTML = 0;
            p1Position6.innerHTML = 0;
            }
    } else if (
        (p1Position7 === p2Position7 || p1Position7 === p2Position8 || p1Position7 === p2Position9) ||
        (p1Position8 === p2Position7 || p1Position8 === p2Position8 || p1Position8 === p2Position9) ||
        (p1Position9 === p2Position7 || p1Position9 === p2Position8 || p1Position9 === p2Position9))
        {
            if (currentplayer === 1) {
            p2Position7.innerHTML = 0;
            p2Position8.innerHTML = 0;
            p2Position9.innerHTML = 0;
            } else {
            p1Position7.innerHTML = 0;
            p1Position8.innerHTML = 0;
            p1Position9.innerHTML = 0;
            }
        }
        
    console.log('conferencia ok');    
}

// player atual
let currentplayer = 1;
const playerElement = document.querySelector('#jogador-atual');

function atualizaCurrentPlayer() {
    playerElement.innerHTML = `Jogador atual: ${currentplayer}`;
}

// atualiza o player atual (no caso o 1)
atualizaCurrentPlayer();

// sorteio dado
const btnDado = document.querySelector('#botao-dado');
const resultadoSorteio = document.querySelector('#num-sorteado');
let numSorteado = '';
let num1Sorteado = '';
let num2Sorteado = '';

// colunas
const btnCol1 = document.querySelector('#p1-col1');
const btnCol2 = document.querySelector('#p1-col2');
const btnCol3 = document.querySelector('#p1-col3');

// funções
function coluna1() {
    if (currentplayer === 1){
        if (p1Position1.innerHTML.trim() === '') {
            p1Position1.innerHTML = numSorteado;
        } else if (p1Position2.innerHTML.trim() === '') {
            p1Position2.innerHTML = numSorteado;
        } else if (p1Position3.innerHTML.trim() === '') {
            p1Position3.innerHTML = numSorteado;
        }

        verificaPlayer1();
        

        currentplayer = 2;
        atualizaCurrentPlayer();

        btnCol1.removeEventListener('click', coluna1);
        btnCol2.removeEventListener('click', coluna2);
        btnCol3.removeEventListener('click', coluna3);

        rodadaPlayer2();
    }
}

function coluna2() {
    if (currentplayer === 1) {
        if (p1Position4.innerHTML.trim() === '') {
            p1Position4.innerHTML = numSorteado;
        } else if (p1Position5.innerHTML.trim() === '') {
            p1Position5.innerHTML = numSorteado;
        } else if (p1Position6.innerHTML.trim() === '') {
            p1Position6.innerHTML = numSorteado;
        }

        verificaPlayer1();
        

        currentplayer = 2;
        atualizaCurrentPlayer();

        btnCol1.removeEventListener('click', coluna1);
        btnCol2.removeEventListener('click', coluna2);
        btnCol3.removeEventListener('click', coluna3);

        rodadaPlayer2();
    }
}

function coluna3() {
    if (currentplayer === 1) {
        if (p1Position7.innerHTML.trim() === '') {
            p1Position7.innerHTML = numSorteado;
        } else if (p1Position8.innerHTML.trim() === '') {
            p1Position8.innerHTML = numSorteado;
        } else if (p1Position9.innerHTML.trim() === '') {
            p1Position9.innerHTML = numSorteado;
        }

        verificaPlayer1();
        

        currentplayer = 2;
        atualizaCurrentPlayer();

        btnCol1.removeEventListener('click', coluna1);
        btnCol2.removeEventListener('click', coluna2);
        btnCol3.removeEventListener('click', coluna3);

        rodadaPlayer2();
    }
}




// rodada
function rodadaPlayer1() {

    function sorteio(){
        numSorteado = randomNumber();
        resultadoSorteio.innerHTML = numSorteado;
        
        
        //adiciona event
        btnCol1.addEventListener('click', coluna1);
        btnCol2.addEventListener('click', coluna2);
        btnCol3.addEventListener('click', coluna3);

        btnDado.removeEventListener('click', sorteio);
    };
    
    btnDado.addEventListener('click', sorteio);
};


function rodadaPlayer2() {

    num1Sorteado = randomNumber();
    num2Sorteado = randomNumber2();

    if(num2Sorteado === 1) {
        if (currentplayer === 2){
            if (p2Position1.innerHTML.trim() === '') {
                p2Position1.innerHTML = num1Sorteado;
            } else if (p2Position2.innerHTML.trim() === '') {
                p2Position2.innerHTML = num1Sorteado;
            } else if (p2Position3.innerHTML.trim() === '') {
                p2Position3.innerHTML = num1Sorteado;
            } else {
                if (p2Position4.innerHTML.trim() === '') {
                    p2Position4.innerHTML = num1Sorteado;
                } else if (p2Position5.innerHTML.trim() === '') {
                    p2Position5.innerHTML = num1Sorteado;
                } else if (p2Position6.innerHTML.trim() === '') {
                    p2Position6.innerHTML = num1Sorteado;
                } else {
                    if (p2Position7.innerHTML.trim() === '') {
                        p2Position7.innerHTML = num1Sorteado;
                    } else if (p2Position8.innerHTML.trim() === '') {
                        p2Position8.innerHTML = num1Sorteado;
                    } else if (p2Position9.innerHTML.trim() === '') {
                        p2Position9.innerHTML = num1Sorteado;
                    } else {
                        num2Sorteado = 1;
                    }
                }
            }

            
    
            currentplayer = 1;
            atualizaCurrentPlayer();
        }
    }

    if(num2Sorteado === 2) {
        if (currentplayer === 2) {
            if (p2Position4.innerHTML.trim() === '') {
                p2Position4.innerHTML = num1Sorteado;
            } else if (p2Position5.innerHTML.trim() === '') {
                p2Position5.innerHTML = num1Sorteado;
            } else if (p2Position6.innerHTML.trim() === '') {
                p2Position6.innerHTML = num1Sorteado;
            } else {
                if (p2Position7.innerHTML.trim() === '') {
                    p2Position7.innerHTML = num1Sorteado;
                } else if (p2Position8.innerHTML.trim() === '') {
                    p2Position8.innerHTML = num1Sorteado;
                } else if (p2Position9.innerHTML.trim() === '') {
                    p2Position9.innerHTML = num1Sorteado;
                } else {
                    if (p2Position1.innerHTML.trim() === '') {
                        p2Position1.innerHTML = num1Sorteado;
                    } else if (p2Position2.innerHTML.trim() === '') {
                        p2Position2.innerHTML = num1Sorteado;
                    } else if (p2Position3.innerHTML.trim() === '') {
                        p2Position3.innerHTML = num1Sorteado;
                    }
                }
            }

            

            currentplayer = 1;
            atualizaCurrentPlayer();
        }
    }

    if(num2Sorteado === 3) {
        if (currentplayer === 2) {
            if (p2Position7.innerHTML.trim() === '') {
                p2Position7.innerHTML = num1Sorteado;
            } else if (p2Position8.innerHTML.trim() === '') {
                p2Position8.innerHTML = num1Sorteado;
            } else if (p2Position9.innerHTML.trim() === '') {
                p2Position9.innerHTML = num1Sorteado;
            } else {
                if (p2Position1.innerHTML.trim() === '') {
                    p2Position1.innerHTML = num1Sorteado;
                } else if (p2Position2.innerHTML.trim() === '') {
                    p2Position2.innerHTML = num1Sorteado;
                } else if (p2Position3.innerHTML.trim() === '') {
                    p2Position3.innerHTML = num1Sorteado;
                }
            }

            

            currentplayer = 1;
            atualizaCurrentPlayer();
        }
    }

    rodadaPlayer1();

}


// lógica do jogo

function jogada() {
    rodadaPlayer1();
    
    

    rodadaPlayer2();
    

    if(vencedor) {
        
    }
};

jogada();