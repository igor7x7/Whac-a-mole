const quadrados = document.querySelectorAll(".quadrado")
const topeira = document.querySelector(".topeira")
const pontuacao = document.querySelector("#pontuacao")
const tempoRestante = document.querySelector("#tempo-restante")

let resultado = 0
let posicaoHit
let tempoPercorrido = 10
let timerId = null

function randomQuadrado() {
    quadrados.forEach(quadrado => quadrado.classList.remove("topeira"))
    let randomQuadrado = quadrados[Math.floor(Math.random() * 9)]
    randomQuadrado.classList.add('topeira')

    posicaoHit = randomQuadrado.id
}


quadrados.forEach(quadrado => {
    quadrado.addEventListener('mousedown', () => {
        if (quadrado.id == posicaoHit) {
            resultado++
            pontuacao.textContent = resultado
            posicaoHit = null
        }
    })
})

function movimentoTopeira() {
    timerId = setInterval(randomQuadrado, 500)
}

movimentoTopeira()

function contagemRegressiva() {
    tempoPercorrido--
    tempoRestante.textContent = tempoPercorrido

    if (tempoPercorrido == 0) {
        clearInterval(contadorRegressivoId)
        clearInterval(timerId)
        alert(`FIM DO JOGO! Sua pontuação final foi de ${resultado}`)
    }
}

let contadorRegressivoId = setInterval(contagemRegressiva, 1000)