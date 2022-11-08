function Card(serie){
   
    var card = document.createElement("div")
    card.classList.add("cards")
    
    var poster = document.createElement("img")
    poster.src = serie.poster
    
    var titulo = document.createElement("p")
    titulo.innerHTML = serie.titulo
    
    var divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    var icone = document.createElement("span")
    icone.classList.add("material-icons")
    icone.classList.add("estrela")
    icone.innerHTML = "star"
    
    var nota = document.createElement("span")
    nota.innerHTML = serie.nota
    
    var botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerHTML = "detalhes"
    
    divNota.appendChild(icone)
    divNota.appendChild(nota)
    
    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}