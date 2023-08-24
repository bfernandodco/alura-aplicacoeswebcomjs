/* 
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play(); //A função .play() reproduz o áudio
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; //sem os () a função é armazenada no atributo onClick
document.querySelector('.tecla_clap').onclick = tocaSomClap;
*/

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//const = constante | let = variável
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {
    /*função genérica para que a função tocaSom()
    não seja executada imediatamente*/
    listaDeTeclas[contador].onclick = function() {
        tocaSom('#som_tecla_pom');
    }
    contador++;
    console.log(contador);
}