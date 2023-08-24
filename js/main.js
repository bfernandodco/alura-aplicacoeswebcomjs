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

//###CONSTRUÇÃO COM O WHILE###
//const = constante | let = variável
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];

    /*a crase torna a string dinâmica, permitindo o uso de código com $
    chamado de template string */
    const idAudio = `#som_${som}`;

    /*função genérica para que a função tocaSom()
    não seja executada imediatamente ao abrir o navegador*/
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador++;
}

//###CONSTRUÇÃO COM O FOR###
for (cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
}