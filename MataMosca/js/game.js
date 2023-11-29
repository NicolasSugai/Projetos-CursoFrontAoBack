// Definindo palco do jogo

var altura = 0
var largura = 0
var vidas = 1

function ajustePalco(){
    altura = window.innerHeight
    largura = window.innerWidth

console.log(altura, largura)
}
ajustePalco()

// Cronômetro
var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		alert('Vitoria')
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

// Criando posições randômicas e definindo seu elemento

function posicaoRandomica() {
    // Após criar elemento -> Quando existir mosca anterior (se existir) -> remover
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        
    // sistema de vidas
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = '../img/coracao_vazio.png'
            vidas++
        }
    } 

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura ) - 90
    // caso as posições (0,0) -90 -> sem img ... para não acontecer:
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)

    // Criando elemento html

    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = ajusteTamanho() + ' ' + ladoRandomico()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    // Adicionando interação
    mosca.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosca)
    console.log(ajusteTamanho())
}

// Tamanhos randômicos para a mosca em três classes

function ajusteTamanho() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

// Dinâmica direção da mosca (lado A, lado B)

function ladoRandomico() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}