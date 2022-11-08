class Jogador{

    nome
    hp = 100
    xp = 0
    envenenado = false

    constructor(nome){
        this.nome = nome
    }

    receberDano(){
        this.hp--
    }

    ganharExperiencia(){
        this.xp++
    }

    atacar(jogador){
        this.ganharExperiencia()
        jogador.receberDano()
    }

}

var jogador1 = new Jogador("Gandalf")
var jogador2 = new Jogador("Aragorn")
var jogador3 = new Jogador("Galadriel")

jogador1.atacar(jogador2)
jogador2.atacar(jogador3)
