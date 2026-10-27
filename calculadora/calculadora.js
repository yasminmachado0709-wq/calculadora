function adicionarValorVisor(valor) {
    log("Adicionou o texto " +valor+ " no visor.");
    document.getElementById("visor").value += valor;
}
function limparValorVisor(){
    console.log ("Limpou o texto do visor.");
    document.getElementById("visor").value = "";
}
function calcular(){
    console.log("Iniciou a função calcular.");
 
    var resultado = "";
    var operacao = "";
    var valor1 = "";
    var valor2 = "";
 
    var conteudoVisor = document.getElementById("visor").value;
 
    for (var indice = 0; indice < conteudoVisor.length; indice ++){
        var valorIndice = conteudoVisor[indice];
 
        if ((isNaN(valorIndice)) && (valorIndice != ".")) {
            if (valorIndice == "+") {
                operacao = valorIndice;
            } else
            if (valorIndice == "-") {
                operacao = valorIndice;
            } else
            if (valorIndice == "*") {
                operacao = valorIndice;
            } else
            if (valorIndice == "/") {
                operacao = valorIndice;
            }
        } else {
            if (operacao == ""){
                valor1 += valorIndice;
            } else {
                valor2 += valorIndice;
            }
        }
       
        if (isNaN(conteudoVisor[indice+1])){
            if ((valor1 != "") && (valor2 != "") && (operacao != "")){
                if (operacao == "+") {
                    resultado = somar(parseFloat(valor1), parseFloat(valor2));
                } if (operacao == "-") {
                    resultado = subtrair(parseFloat(valor1), parseFloat(valor2));
                } if (operacao == "*") {
                    resultado = mutiplicar(parseFloat(valor1), parseFloat(valor2));
                } if (operacao == "/") {
                    resultado = dividir(parseFloat(valor1), parseFloat(valor2));
                }
                valor1 = resultado;
                valor2 = ""
            }
        }
    }
 
    console.log("Executou o calculo.");
 
    if (resultado !== null && resultado !== undefined){
        exibirResultado(resultado);
        log(conteudoVisor + " = " + resultado);
    }
}
function somar(val1, val2){
    log("Somou " + val1 + " com " + val2 + ".");
    return val1 + val2;
}  
function subtrair(val1, val2){
    log("Subtraiu " + val1 + " com " + val2 + ".");
    return val1 - val2;
}
function mutiplicar(val1, val2){
    log("Multiplicou " + val1 + " com " + val2 + ".");
    return val1 * val2;
}
function dividir(val1, val2){
    log("Dividiu " + val1 + " com " + val2 + ".");
    return val1 / val2;
}
function exibirResultado(valor){
    limparValorVisor();
    adicionarValorVisor(valor);
    log("Exibiu o resultado " + valor + "  no visor.");
}
function log(valor){
    console.log("Adicionou o log " + valor + ".");
    if (valor !="")
    {
        var textLog = "<p>" + valor + "</p>" + document.getElementById("conteudo_logs").innerHTML
        document.getElementById("conteudo_logs").innerHTML = textLog;
    }
}