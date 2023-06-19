let arrayEnemies = [];

function CriarEnemiesaAposTresSeg() {
    setInterval(criaEnemies, 1000);
}

function criaEnemies() {
    let tamanhoDaTela = 800;
    let posicaoInicalX = 20;
    let posicaoInicalY = 0;
    let numLinhas = 2;
    let numColunas = parseInt(Math.random() * (17 - 7) + 7);
    let espaco = tamanhoDaTela / numColunas;
    let enemyWidth = espaco / 2;
    let enemyHeigth = espaco / 2;
    let quantidadeEnemies = arrayEnemies.length;

    if (quantidadeEnemies < 12) {
        console.log("quantidade de inimigos: " + quantidadeEnemies)
        console.log("numColunas: " + numColunas)
        console.log(espaco);

        for (let linha = 0; linha < numLinhas; linha++) {
            for (let col = 0; col < numColunas; col++) {
                let enemy = {
                    positionX: posicaoInicalX + col * espaco,
                    positionY: posicaoInicalY + linha * espaco,
                    width: enemyWidth,
                    heigth: enemyHeigth,
                }

                arrayEnemies.push(enemy);
            }
        }
    }
}

async function mostraEnemies() {
    for (let i = 0; i < arrayEnemies.length; i++) {
        image(imagemEnemy,
            arrayEnemies[i].positionX,
            arrayEnemies[i].positionY,
            arrayEnemies[i].width,
            arrayEnemies[i].heigth)
    }
}

function movimentaEnemies() {
    for (let i = 0; i < arrayEnemies.length; i++) {
        mudaPosicaoYdosEnemies(i);

        if (arrayEnemies[i].positionY > posicaoPlayer[1]) {
            break;
        }

    }
}

function mudaPosicaoYdosEnemies(i) {
    arrayEnemies[i].positionY += 0.3;
}

