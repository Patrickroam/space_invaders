function setup() {
    createCanvas(810, 700);
}

function draw() {
    background(imagemFundo);
    mostraPlayer();
    movimentaPlayer();
    criaEnemies();
    mostraEnemies();
    mostraBullet();
    shootBullet();
    //movimentoDosEnemies();
}