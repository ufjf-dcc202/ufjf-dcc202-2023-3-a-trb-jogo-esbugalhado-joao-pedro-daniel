
export function multiplicacao(posicao1, posicao2, posicao3) {

    let linha1 = 1;
    let linha2 = 1;
    let linha3 = 1;

    if(posicao1 === posicao2) {
        linha1 += 1;
    };
    if(posicao1 === posicao3) {
        linha1 += 1;
    };

    if(posicao2 === posicao1) {
        linha2 += 1;
    };
    if(posicao2 === posicao3) {
        linha2 += 1;
    };

    if(posicao3 === posicao1) {
        linha3 += 1;
    };
    if(posicao3 === posicao2) {
        linha3 += 1;
    };

    let somaDaColuna = ((posicao1) * linha1) + ((posicao2) * linha2) + ((posicao3) * linha3);

    return somaDaColuna;

};