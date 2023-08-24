function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
let contador = 0;

while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];

    //a crase torna a string dinâmica, permitindo o uso de código com $
    //chamado de template string 
    const idAudio = `#som_${som}`;

    //função genérica para que a função tocaSom()
    //não seja executada imediatamente ao abrir o navegador
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador++;
}
*/

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const som = tecla.classList[1];

    /*
    a crase torna a string dinâmica, permitindo o uso de código com $
    chamado de template string 
    */
    const idAudio = `#som_${som}`;

    /*
    função genérica para que a função tocaSom()
    não seja executada imediatamente ao abrir o navegador
    */
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    /*
    funcao que invoca a subclasse da classe .tecla e executa o a subclasse ativa
    quando a tecla espaco ou enter é acionado em um dos botões de som
    */
    tecla.onkeydown = function (evento) {

        /*
        .code informa qual tecla foi disparada
        */
        if (evento.code === 'Space' || evento.code === 'NumpadEnter' || evento.code === 'Enter' ) {
            tecla.classList.add('ativa');
        }
    }

    /*
    funcao que invoca a subclasse da classe .tecla e interrompe o a subclasse ativa
    quando a tecla espaço ou enter é liberada em um dos botões de som
    */
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}   