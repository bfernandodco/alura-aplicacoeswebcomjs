function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
let contador = 0;

while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];

    /*a crase torna a string dinâmica, permitindo o uso de código com $
    chamado de template string 
    const idAudio = `#som_${som}`;

    /*função genérica para que a função tocaSom()
    não seja executada imediatamente ao abrir o navegador
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador++;
}
*/

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const som = tecla.classList[1];

    /*a crase torna a string dinâmica, permitindo o uso de código com $
    chamado de template string */
    const idAudio = `#som_${som}`;

    /*função genérica para que a função tocaSom()
    não seja executada imediatamente ao abrir o navegador*/
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
}