// function tocaSom (idElementoAudio) {
//     document.querySelector(idElementoAudio).play();
// }   
// o trecho abaixo e uma forma melhorada das 2 primeiras linhas

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();  
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

// terina aqui o trecho melhorado

const listaDeTeclas = document.querySelectorAll ('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        // console.log(evento);

        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
        
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    console.log(contador);

   

}


