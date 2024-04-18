const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;
const barulhoBotaoZero = new Audio ('sons/beep.mp3');
const barulhoBotaoPlay = new Audio ('sons/play.wav');
const barulhoBotaoPause = new Audio ('sons/pause.mp3');
let tempoDecorridoEmSegundos = 1500;
const startPauseBt = document.querySelector('#start-pause');
let intervaloId = null;
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const imagemPause = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco');
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo');
    longoBt.classList.add('active')
})

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    }

    else {
        musica.pause();
    }
})


function alterarContexto (contexto) {
    mostrarTempo();
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto );
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade <strong class="app__title-strong"> mergulhe no que importa </strong>
            `
            break
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong"> Faça uma pausa curta! </strong>`
            break

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície <strong class="app__title-strong"> Faça uma pausa longa </strong>`
            break
    }
}

const contagemRegressiva = () => {
    
    if (tempoDecorridoEmSegundos <= 0){
        barulhoBotaoZero.play();
        alert('tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar () {
    if (intervaloId) {
        barulhoBotaoPause.play();
        zerar()
        return        
    }
    barulhoBotaoPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.textContent = 'Pausar'
    imagemPause.setAttribute('src','imagens/pause.png')
    
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
    iniciarOuPausarBt.textContent = 'Começar'
    imagemPause.setAttribute('src','imagens/play_arrow.png')
}

function mostrarTempo () {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()