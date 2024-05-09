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


// SOBRE CODIGO

// Função "tocaSom(seletorAudio)":
// Essa função recebe um "seletorAudio" como parâmetro.
// Ela utiliza o d"ocument.querySelector()" para selecionar o elemento correspondente ao "seletorAudio".
// Em seguida, verifica se o "elemento" existe e se seu "localName" é igual a 'audio'.
// Caso a condição seja verdadeira, a função chama o método" play()" no "elemento".
// Caso contrário, a função exibe a mensagem "Elemento não encontrado ou seletor inválido" no console.

// Seleção das teclas:
// O código seleciona todas as teclas com a classe '.tecla' usando "document.querySelectorAll()".
// Ele então itera sobre essa lista de teclas usando um "for".
// Manipulação de eventos:

// Para cada tecla, o código adiciona um evento de clique "(onclick)" que chama a função "tocaSom()" passando o "idAudio" correspondente.
// Também são adicionados eventos de teclado" (onkeydown e onkeyup)" para simular a ativação e desativação da tecla.
// No evento "onkeydown", o código verifica se a tecla pressionada é "Enter" ou "Space" e, se for, adiciona a classe 'ativa' à tecla.
// No evento "onkeyup", o código remove a classe 'ativa' da tecla.

// Exibição do contador:
// Por fim, o código exibe o valor do "contador" no console a cada iteração do loop.

// Esse código implementa a funcionalidade de tocar sons ao clicar ou pressionar as teclas de um instrumento musical virtual. A função "tocaSom()" é responsável por verificar se o elemento de áudio correspondente existe e, caso exista, reproduzir o som. O restante do código trata da manipulação dos eventos de clique e teclado nas teclas do instrumento.
