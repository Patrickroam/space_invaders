function setup() {
    createCanvas(810, 700);
}

function draw() {
    background(imagemFundo);
    mostraPlayer();
    movimentaPlayer();
    CriarEnemiesaAposTresSeg();
    mostraEnemies();
    mostraBullet();
    movimentaEnemies();
}