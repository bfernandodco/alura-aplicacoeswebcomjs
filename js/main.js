function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play(); //A função .play() reproduz o áudio
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; //sem os () a função é armazenada no atributo onClick
document.querySelector('.tecla_clap').onclick = tocaSomClap;
