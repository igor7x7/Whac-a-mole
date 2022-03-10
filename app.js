const quadrados = document.querySelectorAll(".quadrado")
const toupeira = document.querySelector(".toupeira")
const pontuacao = document.querySelector("#pontuacao")
const tempoRestante = document.querySelector("#tempo-restante")

let resultado = 0
let posicaoHit
let tempoPercorrido = 20
let timerId = null

function randomQuadrado() {
    quadrados.forEach(quadrado => quadrado.classList.remove("toupeira"))
    let randomQuadrado = quadrados[Math.floor(Math.random() * 9)]
    randomQuadrado.classList.add('toupeira')

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

function movimentoToupeira() {
    timerId = setInterval(randomQuadrado, 500)
}

movimentoToupeira()

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