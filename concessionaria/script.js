function lerPrecosDosVeiculos(){
    var lista = []
    
    for(i = 0; i<5; i++){
        lista.push( Number( prompt("Digite o preço de um veículo") ))
    }

    return lista
}

function mostrarSoma(lista){
    let soma = lista.reduce((total, item) => {
        return total + item
    }, 0)

    console.log(soma)
}

function mostrarMaioresQue50k(lista){
    let maisCaros = lista.filter(numero => numero > 5000)

    console.log(maisCaros)
}

function mostrarPrecosComDesconto(lista){
    let precosComDesconto = lista.map(preco => preco * 0.95)

    console.log(precosComDesconto)
}

function pesquisa(lista, limite){
    let filtro = lista.filter(preco => {
        return preco <= limite
    })

    console.log(filtro.length)
}

let lista = lerPrecosDosVeiculos()
mostrarSoma(lista)
mostrarMaioresQue50k(lista)
mostrarPrecosComDesconto(lista)
pesquisa(lista, 20000)