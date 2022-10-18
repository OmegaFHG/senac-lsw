var botao = document.querySelector("#verificar")

botao.addEventListener("click", calcular)

function calcular(){
    var nome = document.querySelector("#nome").value
    var idade = document.querySelector("#idade").value
    var saida = document.querySelector("#mensagem")

    saida.innerHTML = `Olá ${nome}, você tem ${idade} anos`
    
    if (idade >= 18){
        saida.innerHTML += "Você pode tirar a habilitação"
    }else{
        saida.innerHTML += "Você não pode tirar a habilitação ainda"
        var tempoRestante = 18 - idade;
        if(tempoRestante == 1){
            saida.innerHTML += `Falta ${tempoRestante} ano para você poder tirar a habilitação`
        }else{
            saida.innerHTML += `Faltam ${tempoRestante} anos para você poder tirar a habilitação`
        }
        
    }
}

