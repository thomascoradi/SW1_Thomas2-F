var total = 0;
var operacao = "";
var valorAtual = 0;
var calculo = "";

function botao() {
    const visor = document.getElementById("visor");
    if (valor=="CE") {
        visor.value = "0";
        total= 0;
        valorAtual = 0;
        return 0;
    }
    if (visor.value.includes(".")==true && valor==".") {
        return 0;
    }
    if (visor.value=="0" && valor=="0") {
        return 0;
    }
    if (visor.valeu=="0") {
        visor.value = "";
    }
    if (visor.value=="" && valor=="0") {
        return 0;
    }
    if (valor=='apagar') {
        valor = visor.value.slice(0, -1)
        visor.value = valor;
        if(visor.value=="") {
            visor.value = 0;
        }
        return 0;
    }

    if (valor=="-" || valor=="+" || valor=="*" || valor=="/") {
        if (visor.value != 0) {
            valorAtual = visor.value;
            valorAtual = parseFloat(valorAtual);
            total = valorAtual
        }
        operacao = valor;
        visor.value = 0;
        return 0;
    } else {
        valorAtual = visor.value;
        calculo = parseFloat(total) + operacao + parseFloat(valorAtual);
        total = parseFloat(calculo)
    }

    if (valor=="total") {
        valorAtual = visor.value;
        calculo = parseFloat(total) + operacao + parseFloat(valorAtual);
        total = eval(calculo);
        total = parseFloat(total);
        visor.value = total;
        return 0;
    } else {
        valorAtual = visor.value;
    }
}