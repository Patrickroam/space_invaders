

let arrayBullets = [];

function mostraBullet() {
    for (let i = 0; i < arrayBullets.length; i++) {
        image(imagemBullet, arrayBullets[i].position[0],
            arrayBullets[i].position[1],
            arrayBullets[i].width,
            arrayBullets[i].heigth);
    }
}


async function shootBullet() {
    if (keyIsDown(32)) {

        let bullet = await criaBullet();

        while (!bullet.colidiu && !bullet.topo) {
            await moveBullet(bullet);
            await verificaColisao(bullet);
            await verificaSeChegouNoTopo(bullet);
            await sleep(20);
        }
    }
}

async function criaBullet() {
    let bullet = {
        position: [posicaoPlayer[0] + 22, 595],
        width: 20,
        heigth: 20,
        colidiu: false,
        topo: false,

    };

    arrayBullets.push(bullet);

    return bullet;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function moveBullet(bullet) {
    bullet.position[1] -= 4;
}

async function verificaSeChegouNoTopo(bullet) {
    if (bullet.position[1] <= 0) {
        bullet.topo = true;
    }
}


async function verificaColisao(bullet) {
    for (let i = 0; i < 595; i++) {

        let collide = collideRectCircle(enemyPositionsX[6],
            enemyPositionsY[33], ENEMY_WIDTH, ENEMY_HEIGHT,
            bullet.position[0], bullet.position[1], 1);

        if (collide) {
            bullet.colidiu = true;
            break;
        }
    }
}

