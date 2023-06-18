
let posicaoPlayer = [350, 610];
let xPlayer = 350;
let yPlayer = 610;
let comprimentoPlayer = 60;
let larguraPlayer = 60;
let posicoesX = [];

function mostraPlayer() {
    image(imagemPlayer, posicaoPlayer[0], posicaoPlayer[1],
        comprimentoPlayer, larguraPlayer);
}

function movimentaPlayer() {
    if (keyIsDown(LEFT_ARROW)) {
        if (podeSeMoverParaEsquerda()) {
            posicaoPlayer[0] -= 3;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if (podeSeMoverParaDireita()) {
            posicaoPlayer[0] += 3;

        }
    }

}

function podeSeMoverParaEsquerda() {
    return posicaoPlayer[0] > 0;
}

function podeSeMoverParaDireita() {
    return posicaoPlayer[0] < 750;
}