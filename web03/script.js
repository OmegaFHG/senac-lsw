class Aluno{
    #nome = ""
    matricula = 0
    #ativo = true

    constructor(nome){
        this.nome = nome
        console.log("O aluno ", this.nome, " foi criado com sucesso")
    }

    responderChamada(){
        console.log(this.nome, " presente")
    }

    getNome(){
        return this.nome
    }

    trancarMatricula(){
        this.#ativo = false
    }

    isAtivo(){
        return this.#ativo
    }

    destrancarMatricula(){
        this.#ativo = true
    }

    static calcularMedia(nota1, nota2){
        return (nota1 + nota2)/2
    }

}

let alunoJoao = new Aluno("Joao")
console.log(alunoJoao.getNome())
alunoJoao.responderChamada()
alunoJoao.trancarMatricula()

Aluno.calcularMedia(2,10)



