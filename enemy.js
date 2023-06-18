const NUM_ENEMIES = 39;
const ENEMY_WIDTH = 40;
const ENEMY_HEIGHT = 40;
const ENEMY_START_X = 20;
const ENEMY_START_Y = [0, 50, 100];
const ENEMIES_ROW = 13;
const ENEMY_SPACING_X = 60;
const ENEMY_SPEED = 1;

let enemyPositionsX = [];
let enemyPositionsY = [];

function criaEnemies() {
    if (enemyPositionsX.length < NUM_ENEMIES) {
        adicionaEnemies();
    }
}

function adicionaEnemies() {
    let posX = ENEMY_START_X;
    let posY = ENEMY_START_Y[0];

    while (enemyPositionsX.length < NUM_ENEMIES) {
        for (let y = 0; y < ENEMY_START_Y.length; y++) {
            posX = ENEMY_START_X;
            posY = ENEMY_START_Y[y];

            for (let j = 0; j < ENEMIES_ROW; j++) {
                enemyPositionsX.push(posX);
                enemyPositionsY.push(posY);
                posX += ENEMY_SPACING_X;
            }
        }
    }

    console.log(enemyPositionsX);
}

function mostraEnemies() {
    for (let i = 0; i < enemyPositionsX.length; i++) {
        image(imagemEnemy, enemyPositionsX[i], enemyPositionsY[i], ENEMY_WIDTH, ENEMY_HEIGHT);
    }
}

function movimentoDosEnemies() {
    let posicao;
    for (let i = 0; i < enemyPositionsX.length; i++) {
        enemyPositionsY[i] += ENEMY_SPEED;

        if (chegouNaBase()) {
            enemyPositionsY[i] = 0;
        }
        return posicao = enemyPositionsY[i];
    }
}

function chegouNaBase(posicao) {
    posicao > 350;

    console.log(posicao);
}
