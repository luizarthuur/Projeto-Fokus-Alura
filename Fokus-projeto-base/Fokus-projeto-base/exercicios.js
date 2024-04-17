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

