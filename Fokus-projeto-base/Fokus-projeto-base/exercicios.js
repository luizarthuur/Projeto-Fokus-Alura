const html = document.querySelector('html');

const temporizador = document.querySelector('#timer');

const focoBt = document.querySelector('.app__card-button--foco');

const curtoBt = document.querySelector('.app__card-button--curto');

const longoBt = document.querySelector('.app__card-button--longo');

const botaoAtivo = document.querySelector('.app__card-button.active');

const botaoPausa = document.querySelector('.app__card-primary-butto-icon');

let tempoFoco = 1500;
let tempoDescansoCurto = 300;
let tempoDescansolongo = 900;



focoBt.addEventListener('click', () => {
    focoBt.classList.add('ativo');
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    curtoBt.classList.add('ativo');
    alterarContexto('curto')
})

longoBt.addEventListener('click', () => {
    longoBt.classList.add('ativo');
    alterarContexto('longo')
})

function alterarContexto() {
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    })
}