
//function 
function dobro(numero){
    return numero * 2
}

//executa a função
console.log(dobro(2))

//arrow function
const quadrado = (numero) => numero * numero

//spread operator
function media(...numeros){
    var soma = 0

    numeros.forEach((numero) => {
        soma += numero
    })

    return soma / numeros.length
}

// default values
function calcularValorFuturo(investimento, taxa=0.01, periodos=1){
    return investimento * Math.pow( (1 + taxa), periodos )
}

// funcao map
function calcularSalarioComAumento(){

    const salarios = [1000, 1500, 2000, 1800]

    const salariosComAumento = salarios.map(salario =>  salario * 1.01)

    console.log(salariosComAumento)

}

// funcao reduce
function totalizarGorgetas(){
    const gorgetas = [1,3,1,5,7]

    const totalDeGorgetas = gorgetas.reduce((total, gorgeta) => total + gorgeta, 0)

    console.log(totalDeGorgetas)
}

//funcao filter
function pares(){
    const numeroInteiros = [1,2,3,4,5,6,7,8,9,10]

    const numerosPares = numeroInteiros.filter(numero => numero % 2 == 0)

    console.log(numerosPares)
}




