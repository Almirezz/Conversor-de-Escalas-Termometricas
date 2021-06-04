function obterEscala(){
    var escalaInicial = ""
    var escalaFinal = ""
    var valorInicial = ""

    var d= document.getElementById("opcoesI")
    var escalaInicial = d.options[d.selectedIndex].text

    var d= document.getElementById("opcoesF")
    var escalaFinal = d.options[d.selectedIndex].text

    var campoValorInicial = document.getElementById('valorInicial')
    valorInicial = parseFloat(campoValorInicial.value)

    if(Number.isNaN(valorInicial)){
        alert("Valor inicial não é um número.Tente novamente.")
    }else{
            valorInicial = parseFloat(campoValorInicial.value)
            obterValor(escalaInicial, escalaFinal, valorInicial)
            console.log(escalaInicial, escalaFinal, valorInicial)
    }
function obterValor(a, b, c){
    console.log("calculando")
    var valorFinal =  " "
                   if(a == "Celsius"){
                   if(b == "Celsius"){
                      valorFinal= (c/5) * 5 + (0)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final:</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "ºC" + "</h3>"  + "</h3>" 
             }else if(b == "Fehrenheit"){
                      valorFinal= (c/5) * 9 + (32)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "ºF" + "</h3>"  + "</h3>"
             }else if(b == "Kelvin"){
                      valorFinal= (c/5) * 5 + (273.15)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "K" + "</h3>"  + "</h3>"
             }
             }else if(a == "Fehrenheit"){
                   if(b == "Celsius"){
                      valorFinal= ((c-32)/9) * 5 + (0)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "ºC" + "</h3>"  + "</h3>"
             }else if(b == "Fehrenheit"){
                      valorFinal= ((c-32)/9) * 9 + (32)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "ºF" + "</h3>"  + "</h3>"
             }else if(b == "Kelvin"){
                      valorFinal= ((c-32)/9) * 5 + (273.15)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "K" + "</h3>"  + "</h3>"
             }
             }else if(a == "Kelvin"){
                   if(b == "Celsius"){
                      valorFinal= ((c-273.15)/5) * 5 + (0)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "ºC" + "</h3>"  + "</h3>"
             }else if(b == "Fehrenheit"){
                      valorFinal= ((c-273.15)/5) * 9 + (32)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "ºF" + "</h3>"  + "</h3>"
             }else if(b == "Kelvin"){
                      valorFinal= ((c-273.15)/5) * 5 + (273.15)
                      document.getElementById('valorF').innerHTML = "<h3 id=html>"  + "<h3 class= 'textos' >Valor Final</h3>"  + "<h3 class= 'valores' id = 'valor'>" + parseFloat(valorFinal)+ "K" + "</h3>"  + "</h3>"
             }
             }else{
                      alert("Erro")
             } 
    }
}
