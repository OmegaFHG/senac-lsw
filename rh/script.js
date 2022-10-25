
function calcularSalario(){
    var nome = document.querySelector("#nome").value
    var salario = document.querySelector("#salario").value
    
    if (salario <= 2424 ) {
        var novoSalario = salario * 1.06
        document.querySelector("#resultado").innerHTML = 
                "Você tem direito ao aumento. " + "Seu novo salário será de " + novoSalario
    }else{
        document.querySelector("#resultado").innerHTML = "Você não tem direito ao aumento"
    }

}

document.querySelector("#calcular").addEventListener("click", calcularSalario)

