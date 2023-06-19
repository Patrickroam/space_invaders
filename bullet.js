let arrayBullets = [];
let shooting = false;


function mostraBullet() {

    for (let i = 0; i < arrayBullets.length; i++) {
        image(imagemBullet,
            arrayBullets[i].position[0],
            arrayBullets[i].position[1],
            arrayBullets[i].width,
            arrayBullets[i].heigth);
    }
}

function keyPressed() {
    if (keyCode === 32 && !shooting) {
        shooting = true;
        shootBullet();
        shooting = false;
    }
}


async function shootBullet() {

    let bullet = await criaBullet();

    while (!bullet.colidiu && !bullet.topo) {

        await moveBullet(bullet);
        await verificaColisao(bullet);
        await verificaSeChegouNoTopo(bullet);
        await sleep(1);
    }

}

async function criaBullet() {
    let bullet = {
        position: [posicaoPlayer[0] + 22, 595],
        width: 20,
        heigth: 20,
        colidiu: false,
        topo: false,
        positionArray: arrayBullets.length
    };

    arrayBullets.push(bullet);
    return bullet;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function moveBullet(bullet) {
    bullet.position[1] -= 1;
}

async function verificaSeChegouNoTopo(bullet) {
    if (bullet.position[1] <= 0) {
        bullet.topo = true;
        excluiBulletNoTopo(bullet);
    }
}


async function verificaColisao(bullet) {

    for (let i = 0; i < arrayEnemies.length; i++) {

        let collide = collideRectCircle(arrayEnemies[i].positionX,
            arrayEnemies[i].positionY,
            arrayEnemies[i].width,
            arrayEnemies[i].heigth,
            bullet.position[0],
            bullet.position[1], 15);

        if (collide) {
            bullet.colidiu = true;
            explodEnemies(i);
            arrayBullets.splice(bullet.arrayBullets, 1);
        }
    }
}

function explodEnemies(i) {
    arrayEnemies.splice(i, 1);

}

function excluiBulletNoTopo(bullet) {
    arrayBullets.splice(bullet.arrayBullets, 1);

}