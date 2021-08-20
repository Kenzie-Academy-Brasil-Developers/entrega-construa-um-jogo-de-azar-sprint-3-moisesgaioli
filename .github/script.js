const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");
const botaoReset = document.querySelector(".reset__button");
const ringPlayer = document.querySelector(".ring__player");
const ringPc = document.querySelector(".ring__pc");
const placarJogador = document.querySelector(".placar__jogador");
const placarPc = document.querySelector(".placar__pc");
const msgVitoria = document.querySelector(".vitoria");

pedra.addEventListener("click", jogar);
papel.addEventListener("click", jogar);
tesoura.addEventListener("click", jogar);



function jogar() {

    ringPlayer.innerHTML = "";
    ringPc.innerHTML = "";

    let jogador = this.id;
    ringPlayer.appendChild(this.cloneNode())
    
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let pc = ""

    if(numeroAleatorio === 0) {
        pc = "pedra";
        ringPc.appendChild(pedra.cloneNode())
    }

    else if(numeroAleatorio === 1) {
        pc = "papel";
        ringPc.appendChild(papel.cloneNode())
     } else {
        pc = "tesoura";
        ringPc.appendChild(tesoura.cloneNode())
    }

    vitoria(jogador, pc)

   
}

const vitoria = (jogador, pc) => {

    msgVitoria.innerText = "";

    if(jogador === "pedra" && pc === "tesoura") {
        placar("jogador");
        msgVitoria.innerText = "Você ganhou!";
    }

    else if(jogador === "papel" && pc === "pedra") {
        placar("jogador");
        msgVitoria.innerText = "Você ganhou!";
    }

    else if(jogador === "tesoura" && pc === "papel") {
        placar("jogador");
        msgVitoria.innerText = "Você ganhou!";
    } 

    else if(jogador === pc) {
        msgVitoria.innerText = "Empate!";
    } else {
        placar("pc");
        msgVitoria.innerText = "Pc ganhou!";
    }
}


const placar = resultado => {

    let contadorJogador =  placarJogador.innerText;
    let contadorPc =  placarPc.innerText;

    if(resultado === "jogador") {
        contadorJogador++
        placarJogador.innerText = contadorJogador;
    }

    if(resultado === "pc") {
        contadorPc++
        placarPc.innerText = contadorPc;
    }
}


const resetar = () => {

    botaoReset.addEventListener("click", (e) => {
        ringPlayer.innerHTML = "";
        ringPc.innerHTML = "";
        placarJogador.innerText = 0;
        placarPc.innerText = 0;
        msgVitoria.innerText = "";
    })
}
resetar();











